import React from 'react';
import config from '../magnolia.config';
import { getAPIBase, getLanguages, removeCurrentLanguage, getCurrentLanguage, getVersion } from './AppHelpers';

import { EditablePage, EditorContextHelper } from '@magnolia/react-editor';

class PageLoader extends React.Component {
  state = {};

  getPagePath = () => {
    const languages = getLanguages();
    const nodeName = process.env.REACT_APP_MGNL_APP_BASE;
    const currentLanguage = getCurrentLanguage();
    let path = nodeName + window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');

    if (currentLanguage !== languages[0]) {
      path = removeCurrentLanguage(path, currentLanguage);
      path += '?lang=' + currentLanguage;
    }

    return path;
  };

  loadPage = async () => {
    // Bail out if already loaded content.
    if (this.state.pathname === window.location.pathname) return;

    const apiBase = getAPIBase();

    const pagePath = this.getPagePath();
    console.log('pagePath:' + pagePath);
    const config = {
      headers: {}
    };

    const version = getVersion(window.location.href);


    let fullContentPath = `${apiBase}${version ? process.env.REACT_APP_MGNL_API_PAGES_PREVIEW : process.env.REACT_APP_MGNL_API_PAGES}${pagePath}}`;

    const pageResponse = await fetch(fullContentPath, config);
    const pageJson = await pageResponse.json();
    console.log('page content: ', pageJson);

    const templateId = pageJson['mgnl:template'];
    console.log('templateId:', templateId);

    let templateJson = null;
    const templateResponse = await fetch(apiBase + process.env.REACT_APP_MGNL_API_TEMPLATES + pagePath);
    templateJson = await templateResponse.json();
    console.log('definition:', templateJson);


    this.setState({
      init: true,
      content: pageJson,
      templateAnnotations: templateJson,
      pathname: window.location.pathname,
    });
  };

  inEditorPreview() {
    const url = window.location.href;
    const inPreview = url.indexOf('mgnlPreview=true') > 0;
    console.log('inEditorPreview:' + inPreview);
    return EditorContextHelper.inEditor() && inPreview;
  }

  componentDidMount() {
    this.loadPage();
  }

  componentDidUpdate() {
    this.loadPage();
  }

  render() {
    if (this.state.init) {
      console.log('config:', config);

      return (
        <EditablePage
          templateAnnotations={this.state.templateAnnotations || {}}
          content={this.state.content}
          config={config}
        ></EditablePage>
      );
    } else {
      return <p>NO PAGE.</p>;
    }
  }
}

export default PageLoader;
