/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DashboardAccountInfo from './DashboardAccountInfo';
import DashboardTutors from './DashboardTutors';
import s from './Dashboard.css';

function TabContainer(props) {
  return (
    <Paper elevation={4}>
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    </Paper>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Dashboard extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Dashboard</h1>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Account info" />
              <Tab label="My Tutors" />
              <Tab label="Progress" />
              <Tab label="Forum" />
              <Tab label="Saved resources" />
              <Tab label="More" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><DashboardAccountInfo/></TabContainer>}
          {value === 1 && <TabContainer><DashboardTutors /></TabContainer>}
          {value === 2 && <TabContainer>In progress...</TabContainer>}
          {value === 3 && <TabContainer>In progress...</TabContainer>}
          {value === 4 && <TabContainer>In progress...</TabContainer>}
          {value === 5 && <TabContainer>In progress...</TabContainer>}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
