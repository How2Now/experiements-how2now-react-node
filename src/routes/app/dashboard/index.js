/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../components/app/Layout';
import Dashboard from './Dashboard';

function action(context, params) {
  return {
    title: 'Dashboard',
    component: (
      <Layout cssReg={context.cssReg} mainSection="dashboard">
        <Dashboard />
      </Layout>
    ),
  };
}

export default action;
