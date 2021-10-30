/* eslint-disable react/prop-types */
/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
/* eslint arrow-body-style: ["off", "never"] */

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ 
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
