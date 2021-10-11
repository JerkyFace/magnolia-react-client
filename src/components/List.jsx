import React from 'react';
import {EditableArea} from '@magnolia/react-editor';

const List = props => {

    const {items} = props;

    return (
        <div className="List">
            <div className="hint">[LIST]</div>
            <ul className="List">
                {items && <EditableArea content={items} parentTemplateId={props.metadata['mgnl:template']}/>}
            </ul>
        </div>
    );
};

export default List;