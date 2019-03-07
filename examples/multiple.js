/* eslint-disable no-console */
import Dropdown from '@test/rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import '@test/rc-dropdown/assets/index.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  state = {
    visible: false,
  };

  onVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }

  selected = [];

  saveSelected = ({ selectedKeys }) => {
    this.selected = selectedKeys;
  }

  confirm = () => {
    console.log(this.selected);
    this.setState({
      visible: false,
    });
  }

  render() {
    const menu = (
      <Menu
        style={{ width: 140 }}
        multiple
        onSelect={this.saveSelected}
        onDeselect={this.saveSelected}
      >
        <MenuItem key="1">one</MenuItem>
        <MenuItem key="2">two</MenuItem>
        <Divider />
        <MenuItem disabled>
          <button
            style={{
              cursor: 'pointer',
              color: '#000',
              pointerEvents: 'visible',
            }}
            onClick={this.confirm}
          >确定
          </button>
        </MenuItem>
      </Menu>
    );

    return (
      <Dropdown
        trigger={['click']}
        onVisibleChange={this.onVisibleChange}
        visible={this.state.visible}
        closeOnSelect={false}
        overlay={menu}
        animation="slide-up"
      >
        <button>open</button>
      </Dropdown>
    );
  }
}

ReactDOM.render(
  <div style={{ margin: 20 }}>
    <Test />
  </div>
, document.getElementById('__react-content'));
