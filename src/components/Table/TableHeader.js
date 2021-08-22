import React from "react";


const TableHeader = () => {
  return (
    <>
    <thead> 
    <tr className="">
  
      <th className="text-sm font-medium">
        No
      </th>
      <th className="text-sm font-medium">
        Launched(UTC)
      </th>
      <th className="text-sm font-medium">
      Location
      </th>
      <th className="text-sm font-medium">
        Mission
      </th>
      <th className="text-sm font-medium">
        Orbit
      </th>
      <th className="text-sm font-medium">
        Launch Status
      </th>
      <th className="text-sm font-medium ">
        Rocket
      </th>
    </tr>
    </thead>
    </>
  );
};

export default TableHeader;