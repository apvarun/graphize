import { useEffect, useRef, useState } from "react";
import TreeRenderer from "./components/TreeRenderer";
import jsonparser from "./lib/jsonparser";
import { TreeState } from "./lib/types";

import demoJson from "./assets/demoJson";

function App() {
  const [state, setState] = useState<TreeState>({
    nodes: [],
    edges: [],
  });
  const treeRef = useRef<HTMLDivElement>(null);

  const [[width, height], setSize] = useState([200, 200]);

  useEffect(() => {
    setState(jsonparser(demoJson));
  }, []);

  useEffect(() => {
    let newWidth = treeRef?.current?.clientWidth;
    let newHeight = treeRef?.current?.clientHeight;

    if (newWidth && newHeight) setSize([newWidth, newHeight]);
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 text-center font-bold">Demo JSON Renderer</h1>
      <div className="flex-1" ref={treeRef}>
        <TreeRenderer
          nodes={state.nodes}
          edges={state.edges}
          width={width}
          height={height}
        />
      </div>
    </>
  );
}

export default App;
