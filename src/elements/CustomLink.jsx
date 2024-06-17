import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import closeIcon from "../resources/delete.svg";

const CustomLink = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  sourcePosition,
}) => {
  const { setEdges } = useReactFlow();

  const deleteLink = () => {
    setEdges((currentEdges) => currentEdges.filter((link) => link.id !== id));
  };

  const [linkPath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });

  const deleteButtonStyle = {
    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
    pointerEvents: "all",
  };

  return (
    <>
      <BaseEdge id={id} path={linkPath} />
      <EdgeLabelRenderer>
        <DeleteButton style={deleteButtonStyle} onClick={deleteLink} />
      </EdgeLabelRenderer>
    </>
  );
};

const DeleteButton = ({ style, onClick }) => (
  <button
    className="h-8 w-8 absolute opacity-30 hover:opacity-100 nodrag nopans"
    style={style}
    onClick={onClick}
  >
    <img
      className="h-full w-full object-contain"
      src={closeIcon}
      alt="close"
    />
  </button>
);

export default CustomLink;
