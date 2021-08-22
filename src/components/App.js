import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import spacex from "../images/spacex.png"
import Table from "./Table";
import { Pagination } from "@bigbinary/neetoui";
import {Dropdown} from "@bigbinary/neetoui"
import Checking from "../components/Checking" 




function App() {

const[loading,setLoading] = useState(true);
const options=["All Launches",  "Upcoming Launches","Successful Launches","Failed Launches"]
const opt=['Success','Upcoming','Failed']
const [info,setInfo] = useState([]);
 const [label,setLabel] = useState('All Launches');
const [currentPage,setCurrentPage] = useState(1);
const [rowsPerPage,setRowsPerPage]= useState(10);
const [data,setData]= useState([]);
const [pageNo,setPageNo] = useState(1);
const [array,setArray] = useState([]);
const [disabled,setDisabled] = useState(false);
var i=0;
useEffect(() => {
   
fetchTasks();
}, [])

//get current posts
const indexOfLastPost = pageNo * rowsPerPage;
const indexOfFirstPost = indexOfLastPost - rowsPerPage; 
console.log("page");
console.log(pageNo);
const totalRows = data.length;
const pageNumbers = [];
const [checkvalue,setCheckvalue] = useState(1);
const [up,setUp] = useState(false);
const [flag,setFlag]= useState(false);
//get pageNumber
for(let i=1;i<=Math.ceil(totalRows/rowsPerPage);i++)
{
  pageNumbers.push(i);
}                 
const labelclass=<div className="flex justify-between">
  <div className="flex px-2 ">
  <div className=" flex ri-filter-line mr-2  ">
  </div>
 
  <div className="flex  justify-between  text-sm word-spacing items-center font-sans  ">
  {label}
  </div>
  </div>
</div>
//Change Page
const paginate=(pageNumber)=>setCurrentPage(pageNumber);
//navigate for pagination
function navigate(event){
  console.log(event);
  console.log(checkvalue);
  if(event<checkvalue)
  {
    console.log("jello")
    setPageNo(pageNo-1);
    
  
  }else{
  
 setPageNo(pageNo+1);
  

  }
  setCheckvalue(event);
  
}
//dataSwap function


//pagination at single page upto 10



const fetchTasks= ()=>{

  setLoading(true);
  axios.get("https://api.spacexdata.com/v3/launches/past ")
  .then((response)=>{
 
    const allNotes= response.data;
console.log(allNotes);
setData(allNotes);
setLoading(false);
console.log(loading);
console.log("hihi");


})

.catch(error=>console.error(`Error: ${error}`));
 
}

  return (
    <div className="flex  mt-4 border-2 flex-col">
     
      <div className="flex  mt-6  justify-center items-center border-black">
          <div className="flex border-black ">
             <img src={spacex} className="h-10 flex justify-center items-center"/>
          </div>
      </div>
     
      <div className=" flex font flex-row-reverse pr-40">
            <Dropdown 
                label={labelclass}
                buttonStyle="text"
                icon="ri-arrow-down-s-line"
              >
                {options.map((option,index)=>{
                    return(
                  <li  key={index} 
                    onClick={()=>{setLabel(option)}}>
                      
                    <div className="flex"> {option}</div> 
              
                  </li>

                )})}
            </Dropdown>
            
          </div>

          <Checking data={data} 
          label={label}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
          setDisabled={setDisabled}
          setLabel={setLabel}
          loading={loading}            
                    
          />
          
        


        <div className="mt-10  justify-center items-center ">
        
          {/*<Pagination rowsPerPage={rowsPerPage} 
          totalRows={data.length}
                    paginate={paginate}/>*/}

         <Pagination className="ml-20" count={data.length} emptyPageMsg="no records bro" pageSize={rowsPerPage} pageNo={pageNo} navigate={(event)=>navigate(event)} />
        </div>
     
   
     
    </div>
   

  );
}

export default App;
