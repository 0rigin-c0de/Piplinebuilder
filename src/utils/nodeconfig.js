import { CustomLink, TargetNode, OriginNode } from '../elements'


const createEntity = (id, x, y, label, type) => ({
  id: id.toString(),
  position: { x, y },
  data: { label },
  type,
});

export const initialNodeSetup = [
  createEntity(1, -300, 100, "Origin 1", "origin-node"),
  createEntity(2, -400, 200, "Origin 2", "origin-node"),
  createEntity(3, -500, 300, "Origin 3", "origin-node"),
  createEntity(4, 500, 100, "Target 1", "target-node"),
  createEntity(5, 500, 400, "Target 2", "target-node"),
]

export const initialLinkSetup = [];

export const nodeCategories = {
  "origin-node": OriginNode,
  'target-node': TargetNode,
}

export const linkCategories = {
  'custom-link': CustomLink,
}