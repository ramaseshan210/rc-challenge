import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import spacex from "../images/spacex.png"
import { Pagination } from "@bigbinary/neetoui";
import {Dropdown} from "@bigbinary/neetoui"
import Checking from "./Checking"
import { Input } from "@bigbinary/neetoui";


{/*The  App contains the details of the Spacex Rockets Launches and its details regarding it.
You can see all the detailed information and launched details through a Table whether its Upcoming ,Success or Failed one.
Main components are 
1.An input tag to search for location and mission names of same
2.Right side- We have a dropdown with options of different Launches
3.At the bottom, we have Pagination component to change the page 
4.A table regarding all launches
5.When clicked each row,we wil be able to see a Modal-Popup with specific detailed information.
*/}

function App() {

  const[loading, setLoading] = useState(true);//for changing load state
  const filters=["All Launches",  "Upcoming Launches", "Successful Launches", "Failed Launches"]
  const [label,setLabel] = useState('All Launches');//For changing label as per need
  const [rowsPerPage,setRowsPerPage]= useState(10);//Setting rows per page for pagination
  const [data,setData]= useState([]);//Store api fetched data
  const [pageNo,setPageNo] = useState(1);//Setting pageNo for pagination
  const [input,setInput] = useState("");
  const [totalrows,setTotalRows]= useState(data.length);//For setting the total rows in pagination
  const inputEl = React.createRef();//For focusing the input
 

  let i=0;

useEffect(() => {
inputEl.current.focus()//Focus the input
fetchTasks();
}, [])

//Get current posts
const indexOfLastPost = pageNo * rowsPerPage;
const indexOfFirstPost = indexOfLastPost - rowsPerPage; 


const pageNumbers = [];
const [checkvalue,setCheckvalue] = useState(1);//For navigate () as prop in pagination comp

//Get pageNumber
for(let i=1;i<=Math.ceil(totalrows/rowsPerPage);i++)
{
  pageNumbers.push(i);
}                 
{/*const labelclass=<div className="flex justify-between">
  <div className="flex px-2">
  <div className=" ri-filter-line mr-2  ">
  </div>
  <div className=" text-sm word-spacing  font-sans  ">
  {label}
  </div>
  </div>
</div>*/}




//Navigate for pagination
function navigate(event){
 
 {event<checkvalue?setPageNo(pageNo-1):
  setPageNo(pageNo+1)}
  setCheckvalue(event);
  }

const fetchTasks= ()=>{ //Called from useeffect ()
  setLoading(true);
const sendGetRequest = async () => {
  try{
    const resp=await axios.get('https://api.spacexdata.com/v3/launches/')
    console.log(resp.data);
    const allNotes= resp.data;
    console.log(allNotes);
    setData(allNotes);
    setLoading(false);
  }catch(err){
    console.error(err);
  }
}//End of sendGetrequest function

sendGetRequest();//Function Call
}

  return (
    <div>
      <div className="flex  mt-6  justify-center ">
            <img src={spacex} className="h-10 flex  mt-6 justify-center "/>
      </div>
      <div className="flex flex-row justify-between ml-40 items-center">
      <div className="margin  mt-20">
        <Input ref={inputEl} value={input} 
        onChange={(e)=>{setInput(e.target.value);
        setPageNo(1);setCheckvalue(1)}}/>
      </div>
      <div className="flex justify-center items-center pr-40 font-serif mt-20">
      <div className=" ri-filter-line pb-1 pr-1"></div>
            <Dropdown 
                label={label}
                buttonStyle="text"
                icon="ri-arrow-down-s-line"
                position="bottom-right"
                autoWidth
                className="flex items-center  justify-center  size "
              
            
               
            >
                {filters.map((filter,index)=>{
                    return(
                        <li  key={index} 
                        onClick={(e)=>{
                        
                        setLabel(filter);
                        setInput("");
                        setPageNo(1);
                        setCheckvalue(1); }}>
                      
                          <div className="" > {filter}</div> 
                        </li>
                   
                       )})}
            </Dropdown>
      </div>
    </div>
          
        <Checking data={data} 
          label={label}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}  
          loading={loading}   
          input={input}  
          setTotalRows={setTotalRows}
          pageNo={pageNo}
          setPageNo={setPageNo}/>
        <div className="flex flex-row-reverse pr-40 mt-10">
         <Pagination  count={totalrows} emptyPageMsg="no records bro" pageSize={rowsPerPage} pageNo={pageNo} navigate={(pageNo)=>navigate(pageNo)} siblingCount={100} />
        </div>  
        </div>
   

  );
}

export default App;
