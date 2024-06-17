import React from "react";
import arrowIcon from "../resources/arow.svg";
import { Handle, Position } from "reactflow";

const TargetNode = ({ data: { label } }) => {
  return (
    <div className="h-20 w-52 border-4 border-green-700 rounded-md p-3 flex items-center justify-between bg-gray-200">
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">{label}</h3>
        <h5 className="text-sm text-gray-600">Target Node</h5>
      </div>
      <div className="bg-green-700 rounded-full p-2 flex items-center justify-center">
        <img
          className="h-8 w-8 transform rotate-180"
          src={arrowIcon}
          alt="arrow-right"
        />
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-green-700 h-8 w-2 rounded-full"
      />
    </div>
  );
};

export default TargetNode;
