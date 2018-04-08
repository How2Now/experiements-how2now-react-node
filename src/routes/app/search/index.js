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
import Search from './Search';

function action(context, params) {
  const sectionPrefix = 'search-';
  const searchType = params.type;

  return {
    title: 'Search',
    component: (
      <Layout cssReg={context.cssReg} mainSection={sectionPrefix + searchType}>
        <Search type={searchType} />
      </Layout>
    ),
  };
}

export default action;
