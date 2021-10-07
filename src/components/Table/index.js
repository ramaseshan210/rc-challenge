import React, { useEffect, useState } from "react";
import {Modal} from "@bigbinary/neetoui"
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ModalContent from "../ModalContent";
import Loading from "../Common/Loading"
import Emptystate from "../Common/Emptystate";


export const HeaderData = 
["No","Launched(UTC)","Location","Mission","Orbit","Launch Status","Rocket"];

const Table = ({data,label,loading,pageNo}) => {
 
  const [empty,setEmpty] = useState(false);
  const[open,setOpen]= useState(false);
  const [info,setInfo] = useState([]);//for modal updation
  
  
 useEffect(()=>{
   data.length===0 ? setEmpty(true):setEmpty(false)
 },[data.length])

  return (

    
    <div className="">
        <div className="flex justify-center  items-center" >
          {loading && <Loading/>}
          
        </div>
      
         
        <table className="table ">
          
                <tbody>
                  <tr className=" border-2   ">
                    {HeaderData.map((header,index)=>{
                      return <th key={index}  className="text-xs  w-20 font-normal border-2 tracking-wider">
                        {header}</th>

                    })}
                    </tr>
                    </tbody>
                    </table>
                    
                    {empty ?  <table className="tables border-2"><Emptystate/></table> :(<table className="tables">
                      <tbody>
                 
                
                { data.map((data,index)=>{
                      
                  return <TableRow  key={data.flight_number} 
                                    data={data} 
                                    open={open} 
                                    setOpen={setOpen} 
                                    setInfo={setInfo} 
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
            </tbody>
            </table>)}
            </div>
  

  

  );
};

export default Table;