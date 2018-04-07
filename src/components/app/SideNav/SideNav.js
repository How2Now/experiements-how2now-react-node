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
// import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider';
import s from './SideNav.css';
import PropTypes from "prop-types";

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
  static propTypes = {
    current: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: s.drawerPaper,
        }}
      >
        <div className={s.toolbar} />
        <p className={s.listLabel}>Study</p>
        <List>
          <ListItem button component="a" href="/app/search/chat" selected={this.props.current === "search-chat"} className={this.props.current === "search-chat" ? s.selectedNavItem: undefined}>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button component="a" href="/app/search/library" selected={this.props.current === "search-library"} className={this.props.current === "search-library" ? s.selectedNavItem: undefined}>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button component="a" href="/app/search/tutors" selected={this.props.current === "search-tutors"} className={this.props.current === "search-tutors" ? s.selectedNavItem: undefined}>
            <ListItemText primary="Tutors" />
          </ListItem>
        </List>
        <Divider />
        <p className={s.listLabel}>Account</p>
        <List>
          <ListItem button component="a" href="/app/dashboard" selected={this.props.current === "dashboard"} className={this.props.current === "dashboard" ? s.selectedNavItem: undefined}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component="a" href="/">
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(s)(SideNav);
