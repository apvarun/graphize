import { useEffect, useState } from "react";

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
    setText(input);
  }, [input]);

  return (
    <div
      className={`absolute top-0 right-0 max-w-full w-[30rem] shadow transform ease-in duration-100 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="flex items-center gap-2.5 bg-white p-2 shadow rounded absolute top-8 right-full"
        onClick={() => setVisible(!visible)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
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
      <div className="w-full bg-white h-screen p-4 flex flex-col">
        <h2 className="font-bold text-lg">Edit contents</h2>
        <p className="mb-2">Replace the demo content with your own JSON</p>
        <textarea
          className="w-full flex-1 rounded border-2 border-slate-100 p-2"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        ></textarea>
        <button
          onClick={() => {
            onChange(text);
            setVisible(false);
          }}
          className="w-full text-center px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 text-white mt-2"
        >
          Rerender
        </button>
      </div>
    </div>
  );
}

export default Editor;
