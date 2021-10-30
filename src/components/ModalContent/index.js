/* eslint-disable react/prop-types */
/* eslint array-callback-return: "off" */
/* eslint consistent-return: "off" */
/* eslint no-trailing-spaces: ["off", { "skipBlankLines": true }] */
/* eslint arrow-body-style: ["off", "never"] */
/* eslint no-use-before-define: ["off", { "classes": false }] */
import React from 'react';
import TableRowForModal from './TableRowForModal';
import youtubeicon from '../../images/youtubeicon.png';
import wiki from '../../images/wiki.png'; 

const ModalContent = ({ info }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row  ">
        <div className="flex logo-size ">
          <img src={info.links.mission_patch_small} alt="" />
        </div>
        <div className="flex flex-col justify-between border-black pl-6 border-black">
          <div className="flex  flex-col tracking-wide font-black">
            {info.mission_name}
          </div>
          <div className="flex rocket-name m-0 font-light ">
            {info.rocket.rocket_name}
          </div>
          <div className="flex flex-row  text-xl  mt-1 items-center ">
            <div className="flex links-logo ">
              <img src="https://www.pinclipart.com/picdir/big/71-713438_nasa-logo-font-nasa-black-and-white-clipart.png" alt="" />
            </div>
            <div className="flex w-logo ">
              <img src={wiki} alt="" />
            </div>
            <div className="flex yt-logo ">
              <img src={youtubeicon} alt="" />
            </div>
          </div>
        </div>
      
        {info.launch_success 
          ? <h1 className=" flex text-xs p-3 justify-center items-center rounded-2xl text-green-600   h-2 bg-green-100 mx-2 ">Success</h1>
          : <h1 className="  flex justify-center items-center  h-2 text-xs p-3 rounded-2xl text-red-800 bg-red-100 mx-2">Failed</h1>}
      </div>
      <div className=" float-left mx-2 leading-7  text-md tracking-wide mt-8">  
        {info.details}
        <a href="https://en.wikipedia.org/wiki/SpaceX_CRS-1">Wikipedia</a>
      </div>
      <div className="mt-4 mx-2">
        <TableRowForModal info={info} />
      </div>
    </div>
  );
};

export default ModalContent;
