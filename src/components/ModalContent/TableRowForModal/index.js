import React from 'react'
import { MODALDETAILS } from '../../Common/Constants';

const TableRowForModal = ({info}) => {
   
  const MODALDETAILS=[{leftHead:"Flight Number",
  rightHead:info.flight_number },
  {leftHead:"Mission Name",
    rightHead:info.mission_name},
  {leftHead:"Rocket Type",
    rightHead:info.rocket.rocket_type},
  {leftHead:"Rocket Name",
    rightHead:info.rocket.rocket_name},
    {leftHead:"Manufacturer",
    rightHead:info.rocket.second_stage.payloads[0].manufacturer},
    {leftHead:"Nationality",
    rightHead:info.rocket.second_stage.payloads[0].nationality},
    {leftHead:"Launch Date",
    rightHead:new Date(info.launch_date_local).toDateString()},
    {leftHead:"PayLoad Type",
    rightHead:info.rocket.second_stage.payloads[0].payload_type},
    {leftHead:"Orbit",
    rightHead:info.rocket.second_stage.payloads[0].orbit},
    {leftHead:"Launch Site",
    rightHead:info.launch_site.site_name},
  ]

  const style="flex justify-center item-center  text-sm mx-6 my-4  ";
  return (
  
      <table className="">
        <tbody>
          {MODALDETAILS.map((details,index)=>(

        
    <tr className="" key={index}>
     <td>
       <h1 className="flex item-center   my-4  text-size  mr-20 text-color-grey-800">{details.leftHead}</h1>
     </td>
     <td>
       <h1 className="flex  item-center  text-sm mx-6 my-4 ">{details.rightHead}</h1>
     </td>
    </tr>
          ))}
    </tbody>
    </table>
   
    
  )
}

export default TableRowForModal
