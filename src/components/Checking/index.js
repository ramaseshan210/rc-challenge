import { Input, StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Table from "../Table"


const Checking = ({data,
                  label,
                  indexOfFirstPost,
                  indexOfLastPost,
                  opt,
                  setDisabled,
                  SetLabel,
                  loading,
                  setTotalRows,
                  setPageNo,
                
                  input}) => {
 
  var array = [];
  var arrays = [];//to swap the filtered content
  var i=0;
  var j=0;
 
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
       
      }
    })
 
  {array.filter((val)=>{
      if(input==="")
      {
        return val
      }
     else if((val.mission_name).toLowerCase().includes(input.toLowerCase())||
     (val.launch_site.site_name).toLowerCase().includes(input.toLowerCase()))
     {
   return val
     }
    }).map((item)=>{

    
    arrays[j]=item;
    j=j+1;
    
  })}
    setTotalRows(arrays.length)
    
return (
    <>
        <Table data={arrays.slice(indexOfFirstPost,indexOfLastPost)}
         opt={opt} 
         label={label}
          loading={loading}
        />
    </>
  )
}

export default Checking
