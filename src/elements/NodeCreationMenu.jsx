import React from "react";

const NodeCreationMenu = ({ updateNodes }) => {
  const generateRandomX = (base, variance) => {
    return base + Math.floor(Math.random() * variance * 2) - variance;
  };
  const generateRandomY = () => Math.floor(Math.random() * 500);

  const createOriginNode = () => {
    updateNodes((currentNodes) => [
      ...currentNodes,
      {
        id: `${currentNodes.length + 1}`,
        position: { x: generateRandomX(-600, 50), y: generateRandomY() },
        data: { label: `Origin ${currentNodes.length + 1}` },
        type: "origin-node",
      },
    ]);
  };

  const createTargetNode = () => {
    updateNodes((currentNodes) => [
      ...currentNodes,
      {
        id: `${currentNodes.length + 1}`,
        position: { x: generateRandomX(600, 50), y: generateRandomY() },
        data: { label: `Target ${currentNodes.length + 1}` },
        type: "target-node",
      },
    ]);
  };

  return (
    <div className="fixed z-10 flex w-full items-center justify-center gap-4 p-2">
      <button
        onClick={createOriginNode}
        className="bg-yellow-200 h-12 w-40 text-black  border-4 border-blue-500 rounded-full flex items-center justify-center gap-3 active:scale-90  transition-transform duration-150 shadow-lg"
      >
        <span className="font-bold text-3xl">+</span>New Origin
      </button>
      <button
        onClick={createTargetNode}
        className="bg-gray-200 h-12 w-48 text-black border-4 border-green-700 rounded-full flex items-center justify-center gap-3 active:scale-90  transition-transform duration-150 shadow-lg"
      >
        <span className="font-bold text-3xl">+</span>New Target
      </button>
    </div>
  );
};

export default NodeCreationMenu;
