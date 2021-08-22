import React, { useState } from "react";
import {Modal} from "@bigbinary/neetoui"
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ModalContent from "../ModalContent";
import Loading from "../Loading"
import ClipLoader from "react-spinners/ClipLoader";


const Table = ({data,label,loading}) => {
  console.log(data);
  const[open,setOpen]= useState(false);
  const [info,setInfo] = useState([]);//for modal updation
  return (
    <div className="flex flex-col mt-4 justify-center items-center ">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden border-b border-gray-200 shadow md:custom-box-shadow">
    
          <table className="min-w-full border-2 divide-y divide-gray-200 ">
        
            <TableHeader />
                {loading?
                    <Loading/>
                 :
                (<>
                      {data.map((data)=>{
                        
                
                  return <TableRow  key={data.flight_number} data={data} label={label} open={open} setOpen={setOpen} setInfo={setInfo} loading={loading}/>
             
             
            })}
            </>
            )}
            <Modal isOpen={open}
            size="small"
            className="overflow-hidden"
            onClose={()=>setOpen(!open)}
            showCloseButton>
            <ModalContent info={info} setInfo={setInfo}/>
              
          </Modal>
        
          </table>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Table;