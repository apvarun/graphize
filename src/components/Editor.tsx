import { useContext, useEffect, useState } from "react";
import MonacoEditor, { loader } from "@monaco-editor/react";
import download from "downloadjs";
import { toPng } from "html-to-image";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import NightOwlTheme from "../assets/night-owl-theme.json";
import EventContext from "../lib/EventContext";
import parser from "../lib/parser";
import { TreeState } from "../lib/types";

function Editor({
  input,
  onChange,
}: {
  input: string;
  onChange: (value: { text: string; data: TreeState }) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(input);

  const eventContext = useContext(EventContext);

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("night-owl", NightOwlTheme as unknown as any);
    });
  }, []);

  useEffect(() => {
    setText(input);
  }, [input]);

  const downloadGraph = () => {
    eventContext.resetZoom();
    // Provide time to reset zoom
    const node = document.querySelector<HTMLElement>(".canvas");
    if (node) {
      toPng(node).then((dataUrl) => {
        download(dataUrl, `Graphize.png`);
      });
    }
  };

  const onRender = () => {
    try {
      const parsedData = parser(text);
      onChange({
        text,
        data: parsedData,
      });
      setVisible(false);
    } catch {
      console.log("Error");
      Toastify({
        text: "Not valid JSON/YAML content.",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(135deg,#F5515F,#A1051D)",
        },
      }).showToast();
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 max-w-full w-[30rem] shadow transform ease-in duration-100 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-2 shadow absolute top-8 right-full bg-slate-700 text-white flex gap-1">
        <button onClick={downloadGraph}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
            <line x1="12" y1="13" x2="12" y2="22" />
            <polyline points="9 19 12 22 15 19" />
          </svg>
        </button>
        <div className="w-px bg-slate-100" />
        <button
          className="flex items-center gap-2.5"
          onClick={() => setVisible(!visible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 8h8v8h-8z" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M16 16l3.3 3.3" />
            <path d="M16 8l3.3 -3.3" />
            <path d="M8 8l-3.3 -3.3" />
            <path d="M8 16l-3.3 3.3" />
          </svg>
          <span>Editor</span>
        </button>
      </div>
      <div className="w-full bg-slate-700 text-white h-screen p-4 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Edit contents</h2>
          <button onClick={() => setVisible(!visible)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <p className="mb-2 text-slate-400">
          Replace the demo content with your own JSON/YAML
        </p>
        <div className="w-full flex-1">
          <MonacoEditor
            theme="night-owl"
            height="100%"
            defaultLanguage="json"
            defaultValue={text}
            onChange={(value) => (value ? setText(value) : null)}
            options={{
              renderValidationDecorations: "off",
            }}
          />
        </div>
        <button
          onClick={onRender}
          className="w-full text-center px-4 py-2 rounded bg-white hover:bg-slate-100 text-slate-900 mt-4"
        >
          Rerender
        </button>
      </div>
    </div>
  );
}

export default Editor;
