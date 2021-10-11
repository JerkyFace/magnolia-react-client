import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const Basic = props => {
  const { main } = props;

  return (
    <div className="App">
      <header className="App-header">   
        {main && <EditableArea className="Area" content={main} />}
      </header>
    </div>
  ) 
};

export default Basic;
