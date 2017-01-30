'use strict'

import * as React from 'react';
import { connect }  from 'react-redux';

import { exampleActions } from './actions/example';

interface Main {
  exampleMember: string;
}

export interface MainProps {
  dispatch: any;
  selectedItem: any;
}

class Main extends React.Component<MainProps, {}> {

  constructor(props) {
    super(props);

    this.exampleMember = "This is an example member"
  }

  selected(item) {
    this.props.dispatch(exampleActions.selectItem(item));
  }

  renderItems(): JSX.Element[] {
    let items = ['one', 'two', 'three', 'four', 'five'];

    return items.map(
      item => <li key={item} onClick={this.selected.bind(this, item)}>{item}</li>);
  }

  selectedText(): string {
    return this.props.selectedItem === null ? 'No selection' : 'You selected ' + this.props.selectedItem;
  }

  render(): JSX.Element {

    return (
      <div>
        <p>{this.selectedText()}</p>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }

};

function subscribedState(state: any): Object {

  const {
    selectedItem
  } = state;

  return {
    selectedItem
  }
}


export default connect(subscribedState)(Main);
