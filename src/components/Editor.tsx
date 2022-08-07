import { useEffect, useState } from "react";
import MonacoEditor, { loader } from "@monaco-editor/react";

import NightOwlTheme from "../assets/night-owl-theme.json";

function Editor({
  input,
  onChange,
}: {
  input: string;
  onChange: (value: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(input);

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("night-owl", NightOwlTheme as unknown as any);
    });
  }, []);

  useEffect(() => {
    setText(input);
  }, [input]);

  return (
    <div
      className={`absolute top-0 right-0 max-w-full w-[30rem] shadow transform ease-in duration-100 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-2 shadow absolute top-8 right-full bg-slate-700 text-white flex gap-1">
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
        <p className="mb-2">Replace the demo content with your own JSON/YAML</p>
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
          onClick={() => {
            onChange(text);
            setVisible(false);
          }}
          className="w-full text-center px-4 py-2 rounded bg-white hover:bg-slate-100 text-slate-900 mt-2"
        >
          Rerender
        </button>
      </div>
    </div>
  );
}

export default Editor;
