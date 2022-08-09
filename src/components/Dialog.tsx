type DialogProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Dialog({ title = "", open, onClose, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/40 "></div>
      <div className="relative p-4 bg-slate-50 border w-full max-w-md m-auto flex-col flex rounded">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold">{title}</span>
          <button onClick={() => onClose()}>
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
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Dialog;
