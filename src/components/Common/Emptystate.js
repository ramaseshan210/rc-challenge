/* eslint arrow-body-style: ["off", "as-needed"] */
/* eslint no-use-before-define: ["off", { "classes": false }] */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
import React from 'react';

const Emptystate = () => { 
  return (
    <>
      <div className=" flex justify-center items-center h-60">
       No results for Specified filter.
      </div>
    </>
  );
};

export default Emptystate;
