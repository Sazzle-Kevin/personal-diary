export default function EntryList({ entries, onViewEntry }) {
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  if (sortedEntries.length === 0) {
    return (
      <div className="text-center py-12 text-pink-300 font-medium">
        Noch keine Einträge vorhanden. Schreib deinen ersten Tag!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto p-4">
      {sortedEntries.map((entry) => (
        <div
          key={entry.id}
          onClick={() => onViewEntry(entry)}
          className="bg-fuchsia-100 rounded-2xl shadow-xl border-2 border-fuchsia-800/30 overflow-hidden flex flex-col cursor-pointer hover:scale-[1.02] transition-all duration-200"
        >
          {entry.image && (
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-48 object-cover border-b-2 border-fuchsia-800/20"
            />
          )}
          <div className="p-4 flex flex-col grow">
            <span className="text-xs font-bold text-pink-700 mb-1">
              {new Date(entry.date).toLocaleDateString("de-DE")}
            </span>
            <h3 className="text-xl font-sans font-bold text-pink-900 truncate">
              {entry.title}
            </h3>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">
              {entry.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
