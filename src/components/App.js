import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import spacex from "../images/spacex.png"
import { Pagination } from "@bigbinary/neetoui";
import {Dropdown} from "@bigbinary/neetoui"
import Checking from "./Checking"
import { Input } from "@bigbinary/neetoui";

{/*tHE App contains the details of the spacex rockets launches and its details regarding it.
You can see all the detailed information and launched details through a Table whether its upcoming ,success or failed one.
Main components are 
1.an input tag to search for location and mission names of same
2.right side- we have a dropdown with options of different launches
3.at the bottom we have pagination component to change the page 
4. A table regarding all launches
5.when clicked each row,we wil be able to see a modal with specific detailed information.
*/}

function App() {

const[loading,setLoading] = useState(true);//for changing load state
const options=["All Launches",  "Upcoming Launches","Successful Launches","Failed Launches"]
const opt=['Success','Upcoming','Failed']//options for showing whether its s,f,or failed.
const [label,setLabel] = useState('All Launches');//for changing label as per need
const [currentPage,setCurrentPage] = useState(1);//setting for pagination
const [rowsPerPage,setRowsPerPage]= useState(10);//setting rows per page for pagination
const [data,setData]= useState([]);//store api fetched data
const [pageNo,setPageNo] = useState(1);//setting pageNo for pagination
const [input,setInput] = useState("");
const [disabled,setDisabled] = useState(false);
const [totalrows,setTotalRows]= useState(data.length);//for setting the total rows in pagination
const inputEl = React.createRef();//for focusing the input
const [prev,setPrev]=useState();
var i=0;

useEffect(() => {
inputEl.current.focus()//focus the input
fetchTasks();
}, [])

//get current posts
const indexOfLastPost = pageNo * rowsPerPage;
const indexOfFirstPost = indexOfLastPost - rowsPerPage; 


const pageNumbers = [];
const [checkvalue,setCheckvalue] = useState(1);//for navigate () as prop in pagination comp

//get pageNumber
for(let i=1;i<=Math.ceil(totalrows/rowsPerPage);i++)
{
  pageNumbers.push(i);
}                 
const labelclass=<div className="flex justify-between">
  <div className="flex px-2">
  <div className=" ri-filter-line mr-2  ">
  </div>
  <div className=" text-sm word-spacing  font-sans  ">
  {label}
  </div>
  </div>
</div>

//Change Page
const paginate=(pageNumber)=>setCurrentPage(pageNumber);

//navigate for pagination
function navigate(event){
 
 {event<checkvalue?setPageNo(pageNo-1):
  setPageNo(pageNo+1)}
  setCheckvalue(event);
  }

const fetchTasks= ()=>{ //called from useeffect ()

  setLoading(true);
  axios.get("https://api.spacexdata.com/v3/launches/past ")
  .then((response)=>{
 
    const allNotes= response.data;
console.log(allNotes);
setData(allNotes);
setLoading(false);
})

.catch(error=>console.error(`Error: ${error}`));
 
}

  return (
    <>
      <div className="flex  mt-6  justify-center ">
            <img src={spacex} className="h-10 flex  mt-6 justify-center "/>
      </div>
      <div className="flex flex-row justify-between ml-40 items-center">
      <div className="margin  mt-20">
        <Input ref={inputEl} value={input} 
        onChange={(e)=>{setInput(e.target.value);
        setPageNo(1);setCheckvalue(1)}}/>
      </div>
      <div className="pr-40 mt-20">
            <Dropdown 
                label={labelclass}
                buttonStyle="text"
                icon="ri-arrow-down-s-line"
                position="bottom-right"
            >
                {options.map((option,index)=>{
                    return(
                        <li  key={index} 
                        onClick={(e)=>{
                        setPrev(label);
                        setLabel(option);
                        setInput("");
                        setPageNo(1);
                        setCheckvalue(1); }}>
                      
                          <div className="" > {option}</div> 
                        </li>
                   
                       )})}
            </Dropdown>
      </div>
    </div>
          
        <Checking data={data} 
          label={label}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
          setDisabled={setDisabled}
          setLabel={setLabel}
          loading={loading}   
          input={input}  
          setTotalRows={setTotalRows}
          pageNo={pageNo}
          setPageNo={setPageNo}/>
        <div className="flex flex-row-reverse pr-40 mt-10">
         <Pagination className=" " count={totalrows} emptyPageMsg="no records bro" pageSize={rowsPerPage} pageNo={pageNo} navigate={(pageNo)=>navigate(pageNo)} siblingCount={100} />
        </div>  
     </>
   

  );
}

export default App;
