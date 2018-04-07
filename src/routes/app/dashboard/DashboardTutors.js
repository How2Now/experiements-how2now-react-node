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
import Table from 'material-ui/Table';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';
import TableCell from 'material-ui/Table/TableCell';
import TableBody from 'material-ui/Table/TableBody';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardTutors.css';

let id = 0;
function createData(name, date, action) {
  id += 1;
  return { id, name, date, action };
}

function createTutorData(name, date, action) {
  id += 1;
  return { id, name, date, action };
}

const upcomingData = [
  createData('Vic Reeves', "Now!", "Start session"),
  createData('Bob Mortimer', "12th May 2018", "Cancel"),
];

id = 0;

const tutorData = [
  createTutorData('Vic Reeves', "Book"),
  createTutorData('Bob Mortimer', "Book"),
  createTutorData('George Doors', "Book"),
];

class DashboardTutors extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Typography component="display1">Upcoming sessions</Typography>
          <Typography component="paragraph">
            <Table className={s.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell numeric>Date</TableCell>
                  <TableCell numeric>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {upcomingData.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell numeric>{n.date}</TableCell>
                      <TableCell numeric>{n.action}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Typography>
          <Divider />
          <Typography component="display1">My tutors</Typography>
          <Typography component="paragraph">
            <Table className={s.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell numeric>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tutorData.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell numeric>{n.action}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardTutors);
