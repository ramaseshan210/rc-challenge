import React,{useState} from 'react'
import classnames from 'classnames';
import { codes } from 'statuses';

const Pagination = ({rowsPerPage,totalRows,paginate}) => {
  const pageNumbers = [];
  let flag=1;
  const [count,setCount] = useState({count:false});

  for(let i=1;i<=Math.ceil(totalRows/rowsPerPage);i++)
  {
    pageNumbers.push(i);
  }
  return (
    <div className="table-link ">
      <div className="flex">
      <button  >HELLO </button>
      </div>
      <ul className=" link">
        {pageNumbers.map(number=>{
            if(flag>4)
            {
         
             console.log(flag);
             flag=flag+1;
              console.log("true");
             
            }else{
              console.log(flag);
            flag=flag+1;
          
            }

            return(
          <li key={number} className="flex  "  >
              <a onClick={()=>paginate(number)} href="!#"  >
                {number}
              </a>
          </li>
)})}
      </ul>
      <div className="flex">
      <button > HEY</button>
      </div>
    </div>
  )
}

export default Pagination
