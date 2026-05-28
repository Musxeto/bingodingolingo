

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  font: string;
}

export default function ConfirmModal({ isOpen, onClose, onConfirm, font }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#fffef8] border-[3px] border-[#1a1a1a] rounded-sm p-6 max-w-sm w-full shadow-[6px_6px_0_rgba(0,0,0,0.25)] animate-in zoom-in-95 duration-200"
        style={{ fontFamily: font }}
      >
        <h2 className="text-3xl font-bold mb-2 text-[#c0392b]" style={{ fontFamily: "'Ramidots', cursive" }}>Are you sure?</h2>
        <p className="text-[#1a1a1a] mb-8 text-[1.1rem] leading-tight">
          This will permanently delete your card, erase your customizations, and completely clear your local storage.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 font-bold text-lg border-[2.5px] border-gray-800 bg-gray-100 rounded transition-transform hover:-translate-y-0.5 shadow-[2px_2px_0_rgba(0,0,0,0.2)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 py-2.5 font-bold text-lg border-[2.5px] border-[#c0392b] bg-[#ffd6d6] text-[#6d1010] rounded transition-transform hover:-translate-y-0.5 shadow-[2px_2px_0_#c0392b]"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
