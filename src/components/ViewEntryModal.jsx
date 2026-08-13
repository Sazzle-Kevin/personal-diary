export default function ViewEntryModal({ entry, onClose }) {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-fuchsia-200 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col border-4 border-fuchsia-800/50 overflow-hidden">
        <div className="p-4 bg-fuchsia-300/50 flex justify-between items-center border-b-2 border-fuchsia-800/20">
          <span className="text-xs font-bold text-pink-700">
            {new Date(entry.date).toLocaleDateString("de-DE")}
          </span>
          <button
            onClick={onClose}
            className="text-pink-800 hover:text-pink-600 font-bold text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto grow flex flex-col">
          {entry.image && (
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-64 object-cover border-b-2 border-fuchsia-800/20"
            />
          )}
          <div className="p-6">
            <h2 className="text-3xl font-sans font-bold text-pink-900 mb-4">
              {entry.title}
            </h2>
            <p className="text-gray-800 font-serif whitespace-pre-wrap leading-relaxed">
              {entry.content}
            </p>
          </div>
        </div>

        <div className="p-4 bg-fuchsia-300/30 text-right border-t-2 border-fuchsia-800/20">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-lg cursor-pointer transition"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
