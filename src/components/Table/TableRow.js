import React from "react";



const TableRow = ({data,label,setOpen,open,setInfo,id}) => {

  const style="flex justify-center item-center text-sm mx-6 ";
 var date=new Date(data.launch_date_utc);


  return (
      <>
    
      <tbody>
         
        <tr  className="hover:bg-green-100 cursor-pointer "
             onClick={()=>{setOpen(!open); setInfo(data);}} 
             key={data.flight_number}>
            <td>
              <h1 className={style}>
                {id}
              </h1>
            </td>
            <td>
              <h1 className={style}> {date.toDateString()} {date.toLocaleTimeString()}</h1>
            </td>
            <td>
              <h1 className={style}>{data.launch_site.site_name}</h1>
            </td>
            <td>
              <h1 className={style}>{data.mission_name}</h1>
            </td>
            <td>
              <h1 className={style}>  {data.rocket.second_stage.payloads[0].orbit}</h1>
            </td>
            <td>
              {data.launch_success ? <h1 className=" flex justify-center items-center  text-sm p-3  rounded-2xl text-green-600  my-5 h-2 bg-green-100 mx-6  ">Success</h1>:<h1 className="  flex justify-center items-center  h-2 text-sm p-3 rounded-2xl text-red-800 my-5 bg-red-100 mx-6">Failed</h1>}
            </td>
            <td>
              <h1 className={style}> {data.rocket.rocket_name}</h1>
            </td>
          </tr>
        </tbody>
</>
    
  );
};



export default TableRow;