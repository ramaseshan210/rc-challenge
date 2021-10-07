import React from "react";


const TableHeader = ({HeaderData}) => {

  const style="";
  return (
  
   <tbody>
  
      {HeaderData.map((header,index)=>{
        return (  <th key={index} className="sticky text-xs tracking-wider text-right  font-normal">
       {header}
      </th>)
        
      })}
  
    </tbody>
   
  );
};

export default TableHeader;