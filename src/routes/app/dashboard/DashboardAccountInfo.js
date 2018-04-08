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
import s from './DashboardAccountInfo.css';

class DashboardAccountInfo extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Typography component="display1">University</Typography>
          <Typography component="paragraph">
            Interactive Media MSc. | University of Westminster
          </Typography>
          <Divider />
          <Typography component="display1">Contact details</Typography>
          <Typography component="paragraph">
            matt@spall.co.uk
          </Typography>
          <Divider />
          <Typography component="display1">Payment details</Typography>
          <Typography component="paragraph">
            Debit card: **** **** **** 5555
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardAccountInfo);
