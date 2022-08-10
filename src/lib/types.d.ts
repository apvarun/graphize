import { EdgeData, NodeData } from "reaflow";

export type TreeState = {
  nodes: NodeData<any>[];
  edges: EdgeData<any>[];
  depth: number;
};
