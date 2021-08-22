import { StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Table from './Table';


const Checking = ({data,label,indexOfFirstPost,indexOfLastPost,opt,setDisabled,StepLabel,loading}) => {

  var array = [];
  console.log(indexOfFirstPost);
  console.log(indexOfLastPost);
  console.log("heyhey")

  var i=0;


      data.map((data)=>{

      if(data.launch_success===false && label==="Failed Launches")
      {
       array[i]=data;
       i=i+1;
     
      }else if(data.launch_success===true && label==="Successful Launches")
      {
        array[i]=data;
        i=i+1;
      }else if(data.upcoming=== "Upcoming Launches" && label==="Upcoming Launches")
      {
        array[i]=data;
        i=i+1;
      }else if(label==="All Launches")
      {
        array[i]=data;
        i=i+1;
        console.log("myre");
      }
       
    })


  





  
 

  return (
    <>
                
        <Table data={array.slice(indexOfFirstPost,indexOfLastPost)} opt={opt} label={label} loading={loading} />
    </>
  )
}

export default Checking
