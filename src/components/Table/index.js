/* eslint-disable react/prop-types */
/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
/* eslint no-use-before-define: ["off", { "classes": false }] */
/* eslint no-else-return: "off" */
import React, { useEffect, useState } from 'react';
import { Modal } from '@bigbinary/neetoui';
import ModalContent from '../ModalContent';
import Loading from '../Common/Loading';
import Emptystate from '../Common/Emptystate';
import classNames from 'classnames';


const Table = ({
  data,
  loading,
  pageNo,
}) => {
  const [empty, setEmpty] = useState(false);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);// For modal updation

  useEffect(() => {
    data.length === 0 ? setEmpty(true): setEmpty(false);
  }, [data.length]);

  return (
       <div className="">
        
      <div className="flex  justify-center items-center flex-col">
      {loading && <Loading />}
     
        <table className="content-table mt-10 border-2">
          <thead>
            <tr>
              <th>No:</th>
              <th>Launched (UTC)</th>
              <th>Location</th>
              <th>Mission</th>
              <th>Orbit</th>
              <th>Launch Status</th>
              <th>Rocket</th>
            </tr>
          </thead>
          
          <tbody>  
            {data.map((data,index) => <tr 
              key={data.flight_number}  
              className="hover:bg-green-100 cursor-pointer   text-xs mx-8"
              onClick={() => { setOpen(!open); setInfo(data); }} >
              <td>
                {pageNo === 1 ? index + 1 : (pageNo * 10) - 10 + (index + 1)} 
              </td>
              <td className="   ">
                {new Date(data.launch_date_utc).toDateString()}  
                {new Date(data.launch_date_utc).toLocaleTimeString()}
              </td>
              <td className="">
                {data.launch_site.site_name}
              </td>
               <td className=" text-center">
                {data.mission_name}
              </td>
              <td className="">
                {data.rocket.second_stage.payloads[0].orbit}
              </td>
              <td className={classNames(' flex rounded-2xl w-20 my-3 ml-6 bg-red-100 text-red-700 ', { 'bg-green-100 text-green-600': data.launch_success === true, 'bg-yellow text-red-200': data.upcoming === 'Upcoming' })}>
                {data.launch_success ? 'Success' : 'Failed'}
              </td>
              <td className="text-center">
                  {data.rocket.rocket_name}
              </td>
            </tr>)}
          </tbody>
        </table>
        {empty && <tbody className=" content-table mt-0 border-2"><Emptystate /></tbody>}
        <Modal 
          isOpen={open}
          size="small"
          className="overflow-hidden"
          onClose={() => setOpen(!open)}
          showCloseButton
        >
          <ModalContent info={info} setInfo={setInfo} />
        </Modal>
      </div>
      
    </div>
  )
}

export default Table;


