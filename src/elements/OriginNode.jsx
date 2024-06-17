import React from "react";
import arrowIcon from "../resources/arow.svg";
import { Handle, Position } from "reactflow";

const OriginNode = ({ data: { label } }) => {
  return (
    <div className="h-20 w-44 border-2 border-blue-500 rounded-lg p-2 flex items-center justify-between bg-yellow-200">
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{label}</h3>
        <h5 className="text-xs text-gray-700">Origin Node</h5>
      </div>
      <div className="bg-gray-400 rounded-full p-1 flex items-center justify-center">
        <img
          className="h-6 w-6 transform rotate-360"
          src={arrowIcon}
          alt="arrow-right"
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="bg-blue-500 h-8 w-2 rounded-full"
      />
    </div>
  );
};

export default OriginNode;
