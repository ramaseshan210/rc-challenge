/* eslint-disable react/prop-types */
/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
/* eslint arrow-body-style: ["off", "never"] */
/* eslint no-use-before-define: ["off", { "classes": false }] */
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <>
      <div className="">
        <ClipLoader size="50" width="300" height="10" />
      </div>
    </>
  );
};

export default Loading;
