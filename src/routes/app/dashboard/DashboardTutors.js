/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardTutors.css';

class DashboardTutors extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Typography component="display1">Upcoming sessions</Typography>
          <Typography component="paragraph">
          ...
          </Typography>
          <Divider />
          <Typography component="display1">My tutors</Typography>
          <Typography component="paragraph">
          ...
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardTutors);
