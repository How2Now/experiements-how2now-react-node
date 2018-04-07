/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Drawer from 'material-ui/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import s from './SideNav.css';
import Link from '../../common/Link/Link';

const navWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: navWidth,
  },
  toolbar: theme.mixins.toolbar,
});

/*
{/*
  <ListItemIcon>
    <InboxIcon />
  </ListItemIcon>
*\/}
* */

class SideNav extends React.Component {
  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: s.drawerPaper,
        }}
      >
        <div className={s.toolbar} />
        <p>Study</p>
        <List>
          <ListItem button>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Tutors" />
          </ListItem>
        </List>
        <Divider />
        <p>Account</p>
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(s)(SideNav);
