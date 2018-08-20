import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import AutoComplete from './auto';


const Names = [
  'Peter',
  'Nicole',
  'Luciana'
];

const Panes = [
  {title: 'Info', content: 'I am the first'},
  {title: 'Templates', content: 'Second pane here'},
  {title: 'Search', content: 'Third pane here'}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <div className='interactive'>
          <Tabs panes={Panes} />
          <AutoComplete names={Names} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});