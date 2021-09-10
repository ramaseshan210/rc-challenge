import React from 'react'
import TableRowForModal from './TableRowForModal';

const ModalContent = ({info}) => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  ">
        <div className="flex logo-size ">
           <img  src={info.links.mission_patch_small}/>
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
            <img src={"https://www.pinclipart.com/picdir/big/71-713438_nasa-logo-font-nasa-black-and-white-clipart.png"}/>
            </div>
            <div className="flex w-logo px-1">
              <img src={"https://scontent.fcok12-1.fna.fbcdn.net/v/t1.18169-9/28576058_10156026405618346_4379043427201638550_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=SwqvnwEH_S4AX8Uh269&_nc_ht=scontent.fcok12-1.fna&oh=f2587def3fab4438288c1b94574124c1&oe=613A8D64"}/>
            </div>
            <div className="flex yt-logo px-1">
              <img src={"https://www.pngix.com/pngfile/big/195-1952686_social-media-clipart-tumblr-transparent-youtube-icon-white.png"}/>
            </div>
          </div>
        </div>
      
        {info.launch_success ? 
        <h1 className=" flex text-xs p-3 justify-center items-center rounded-2xl text-green-600   h-2 bg-green-100 mx-2 ">Success</h1>:
        <h1 className="  flex justify-center items-center  h-2 text-xs p-3 rounded-2xl text-red-800 bg-red-100 mx-2">Failed</h1>}
      
      </div>
        <div className=" float-left mx-2 leading-7  text-md tracking-wide mt-8">  
          {info.details}
          <a href="https://en.wikipedia.org/wiki/SpaceX_CRS-1">Wikipedia</a>
        </div>
        <div className="mt-4 mx-2">
            <TableRowForModal info={info}/>
        </div>

    
    </div>
  )
}

export default ModalContent
