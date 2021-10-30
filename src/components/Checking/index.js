/* eslint-disable react/prop-types */
/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
/* eslint no-use-before-define: ["off", { "classes": false }] */
/* eslint no-else-return: "off" */

import React from 'react';
import Table from '../Table';

const Checking = ({ 
  data,
  label,
  indexOfFirstPost,
  indexOfLastPost,
  loading,
  setTotalRows,
  pageNo,
  input,
}) => {
  let array = [];
  let arrays = [];// to swap the filtered content
  let i = 0;
  let j = 0;
  data.map((rocketdata) => {  
    if (rocketdata.launch_success === false && label === 'Failed Launches') {
      array[i] = rocketdata;
      i += 1;
    } else if (rocketdata.launch_success === true && label === 'Successful Launches') {
      array[i] = rocketdata;
      i += 1;
    } else if (rocketdata.upcoming === 'Upcoming Launches' && label === 'Upcoming Launches') {
      array[i] = rocketdata;
      i += 1;
    } else if (label === 'All Launches') {
      array[i] = rocketdata;
      i += 1;
    }
  });
 
  array.filter((val) => {
    if (input === '') {
      return val;
    } else if ((val.mission_name).toLowerCase().includes(input.toLowerCase()) 
    || (val.launch_site.site_name).toLowerCase().includes(input.toLowerCase())) {
      return val;
    }
  }).map((item) => {
    arrays[j] = item;
    j += 1;
  }); 
  setTotalRows(arrays.length);
    
  return (
    <>
      <Table
        data={arrays.slice(indexOfFirstPost, indexOfLastPost)}
        loading={loading}
        pageNo={pageNo}
      />
    </>
  );
};

export default Checking;
