import { useEffect, useRef, useState } from "react";

import TreeRenderer from "./components/TreeRenderer";
import Editor from "./components/Editor";
import parser from "./lib/parser";
import { TreeState } from "./lib/types";
import demoJson from "./assets/demoJson";
import { EventContextProvider } from "./lib/EventContext";
import { CanvasDirection } from "reaflow";

function App() {
  const [input, setInput] = useState(demoJson);

  const [state, setState] = useState<TreeState>({
    nodes: [],
    edges: [],
    depth: 1,
  });
  const [direction, setDirection] = useState<CanvasDirection>("DOWN");
  const treeRef = useRef<HTMLDivElement>(null);

  const [[width, height], setSize] = useState([200, 200]);

  useEffect(() => {
    // @ts-ignore
    window.g = null;

    let initialData = demoJson;
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const content = params.get("v");
    if (content) {
      const value = decodeURIComponent(content);
      initialData = value;
    }

    try {
      const parsedData = parser(initialData);
      setState(parsedData);
      setInput(initialData);
    } catch {
      // Notify that the shared content is not valid
      const parsedData = parser(demoJson);
      setState(parsedData);
    }
  }, []);

  useEffect(() => {
    let newWidth = treeRef?.current?.clientWidth;
    let newHeight = treeRef?.current?.clientHeight;

    if (newWidth && newHeight) setSize([newWidth, newHeight]);
  }, []);

  return (
    <EventContextProvider>
      <Editor
        input={input}
        onChange={({ text, data }) => {
          setInput(text);
          setState(data);
        }}
        direction={direction}
        onDirectionChange={setDirection}
      >
        <div className="flex-1" ref={treeRef}>
          <TreeRenderer
            key={input}
            width={width}
            height={height}
            direction={direction}
            {...state}
          />
        </div>
      </Editor>
    </EventContextProvider>
  );
}

export default App;
