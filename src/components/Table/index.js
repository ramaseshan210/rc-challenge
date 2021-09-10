import React, { useState } from "react";
import {Modal} from "@bigbinary/neetoui"
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ModalContent from "../ModalContent";
import Loading from "../Common/Loading"
import Emptystate from "../Common/Emptystate";


export const HeaderData = 
["No","Launched(UTC)","Location","Mission","Orbit","Launch Status","Rocket"];

const Table = ({data,label,loading,pageNo}) => {


  const[open,setOpen]= useState(false);
  const [info,setInfo] = useState([]);//for modal updation
  return (
    <div className="flex  mt-20 justify-center items-center">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    
        <div className="flex justify-center  items-center" >
          {loading && <Loading/>}
        </div>
        <table className=" min-w-full border-2 divide-y divide-gray-200  widther ">
            {loading ? <></> : 
            (
              <>
            <TableHeader HeaderData={HeaderData} />
                
                 {data.map((data,index)=>{
                      
                  return <TableRow  key={data.flight_number} 
                                    data={data} 
                                    label={label} 
                                    open={open} 
                                    setOpen={setOpen} 
                                    setInfo={setInfo} 
                                    loading={loading}
                                    id={pageNo===1?index+1:(pageNo*10)-10+(index+1)}
                                 
                                    />
                                  })}
            <Modal isOpen={open}
            size="small"
            className="overflow-hidden"
            onClose={()=>setOpen(!open)}
            showCloseButton>
            <ModalContent info={info} setInfo={setInfo}/>
            </Modal>
               </>
            )}
        </table>
          {data.length===0 && <Emptystate/>}
        </div>
      </div>
  
  

  );
};

export default Table;