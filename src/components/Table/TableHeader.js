import React from "react";


const TableHeader = ({HeaderData}) => {

  const style="text-sm  font-normal text-color-grey-800 opacity-90 ";
  return (
    <>
    <thead className=""> 
    <tr className="">
      {HeaderData.map((header,index)=>{
        return (  <th key={index} className={style}>
       {header}
      </th>)
        
      })}
   
    </tr>
    </thead>
    </>
  );
};

export default TableHeader;