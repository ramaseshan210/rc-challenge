import classNames from "classnames";
import React from "react";



const TableRow = ({data,setOpen,open,setInfo,id}) => {


 var date=new Date(data.launch_date_utc);


  return (
      <>
    
  
         
        <tr  className="hover:bg-green-100 cursor-pointer   text-xs mx-8"
             onClick={()=>{setOpen(!open); setInfo(data);}} 
             key={data.flight_number}>
            <td className="text-xs text-center ">
                {id}
            </td>
            <td className="text-center   ">
              {date.toDateString()} {date.toLocaleTimeString()}
            </td>
            <td className="text-center">
             {data.launch_site.site_name}
            </td>
            <td className="text-center">
             {data.mission_name}
            </td>
            <td className="text-center" >
              {data.rocket.second_stage.payloads[0].orbit}
            </td>
            <td className={classNames(`flex justify-center items-center rounded-2xl my-3  w-20 ml-12 bg-red-100 text-red-700 `,{"bg-green-100 text-green-600":data.launch_success===true,"bg-yellow text-red-200":data.upcoming==="Upcoming"})}>
             {data.launch_success?'Success':'Failed'}
            </td>
            <td className="text-center">
              {data.rocket.rocket_name}
            </td>
          </tr>
        
</>
    
  );
};



export default TableRow;