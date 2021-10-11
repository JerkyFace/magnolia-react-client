# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Getting started with your Magnolia Headless SPA has never been easier. Simply add your Magnolia Template configuration to ```./src/magnolia.config.js```, edit the .env & .env.mgnl files, deploy your project and go. See the [Available Scripts](#Available-Scripts) section to fire it off locally.

## Available Scripts

In the project directory, you can run:

### `npm run build:mgnl`

Runs the build that should be transferred to your Light Module's `webresources` folder. If you'd like to make it even simpler, you can add another script called `deploy:mgnl` like so:

```json
"clean": "rimraf dist && rimraf ../../../../magnolia/light-modules/no-light-module-lm/webresources/build",
"deploy:mgnl": "npm run build:mgnl && copyfiles -u 1 \"build/**/*\" ../../../../magnolia/light-modules/no-light-module-lm/webresources/build"
```

where ```../../../../magnolia/light-modules/no-light-module-lm``` is pointing to your Light Module on the file system.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Make it Yours

When you're ready to wire up your Magnolia environment with the new project, you can take the following steps to remove the demo code and run against your Magnolia environment.

#### Remove the demo code

Run the following from your React App directory:

```sh
rm -rf ./public/exampleData
rm ./src/logo.svg
rm -rf ./src/pages/*
rm -rf ./src/components/*
```

Remove the componentMappings from ```./src/magnolia.config.js``` by replace the contents with:

```js
const config = {
    'componentMappings':{
        // Page Components
        // Components
    }
};

export default config;
```

Replace the ```.env``` file with these contents. Keep in mind, this is assuming that you are deploying your Author instance to the webapp called ```magnoliaAuthor```. If it is not that, just replace it with the name of your webapp. If you are not using a public instance, you can leave it along as it won't matter, but if you are, make sure the name is correct.

```properties
PUBLIC_URL=
REACT_APP_MGNL_HOST=http://localhost:8080
REACT_APP_MGNL_IS_PREVIEW=true
REACT_APP_MGNL_DAM_RAW=http://localhost:8080
REACT_APP_MGNL_LANGUAGES="en de"
REACT_APP_MGNL_BASE_AUTHOR=/magnoliaAuthor
REACT_APP_MGNL_BASE_PUBLIC=/magnoliaPublic
REACT_APP_MGNL_APP_BASE=
REACT_APP_MGNL_API_TEMPLATES=/.rest/templateDefinition/v1
REACT_APP_MGNL_API_PAGES=/.rest/delivery/pages/v1
REACT_APP_MGNL_API_NAV=/.rest/delivery/pagenav/v1
```

The same goes for the ```.env.mgnl``` file, replace the contents and the webapp names appropropriately.

```propoerties
PUBLIC_URL=/magnoliaAuthor/.resources/bookshelf/webresources/build
REACT_APP_MGNL_HOST=http://localhost:8080/
REACT_APP_MGNL_BASE_AUTHOR=magnoliaAuthor
REACT_APP_MGNL_BASE_PUBLIC=magnoliaPublic
REACT_APP_MGNL_APP_BASE=/
REACT_APP_MGNL_IS_PREVIEW=true
REACT_APP_MGNL_API_PAGES=/.rest/delivery/pages/v1
REACT_APP_MGNL_DAM_RAW=http://localhost:8080
REACT_APP_MGNL_LANGUAGES="en de"
```

## Learn More

You can learn more about developing [Magnolia's Headless SPA here](https://hd.magnolia-cms.com/)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
