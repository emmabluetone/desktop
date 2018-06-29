import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Store from '../../store';
import Workspace from '../../models/workspace';
import Add from './Add';
import Item from './Item';
import { Root, ItemsContainer, Dark } from './styles';

@observer
export default class Workspaces extends Component<{}, {}> {
  hide = () => {
    Store.workspaces.visible = false;
  };

  // TODO: A dialog with workspace name
  addNew = () => {
    const workspace: Workspace = new Workspace();

    Store.workspaces.list.push(workspace);
    // Store.workspaces.selected = Store.workspaces.list.length;
  };

  public render() {
    const { visible, selected, list } = Store.workspaces;

    return (
      <React.Fragment>
        <Root visible={visible} onClick={this.hide}>
          <ItemsContainer>
            {list.map((workspace: Workspace) => (
              <Item
                icons={workspace.getIcons()}
                label={workspace.name}
                selected={selected === workspace.id}
                key={workspace.id}
              />
            ))}
            <Add onClick={this.addNew} />
          </ItemsContainer>
          <Dark />
        </Root>
      </React.Fragment>
    );
  }
}
