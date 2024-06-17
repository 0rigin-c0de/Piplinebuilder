import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodeSetup, initialLinkSetup, nodeCategories, linkCategories } from "./utils/nodeconfig";
import { NodeCreationMenu } from "./elements";

const Application = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodeSetup);
  const [links, setLinks, onEdgesChange] = useEdgesState(initialLinkSetup);

  const handleConnect = useCallback(
    (connection) => {
      const link = {
        ...connection,
        animated: true,
        id: `${links.length + 1}`,
        type: "custom-link",
      };
      setLinks((currentLinks) => addEdge(link, currentLinks));
    },
    [links, setLinks]
  );

  return (
    <div className="h-screen w-screen font-roboto">
      <NodeCreationMenu updateNodes={setNodes} />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={links}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        nodeTypes={nodeCategories}
        edgeTypes={linkCategories}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Application;
