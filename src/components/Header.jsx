export default function Header({ onOpenForm }) {
  return (
    <div className="w-full min-h-[10vh] h-12 rounded-b-xl bg-fuchsia-200 flex items-center justify-between px-6">
      <h1 className="text-2xl font-serif italic font-bold text-pink-800">
        📖 Mein Tagebuch
      </h1>

      <button
        onClick={onOpenForm}
        className="px-4 py-2 bg-pink-800 hover:bg-pink-700 text-white font-bold rounded-lg cursor-pointer transition duration-200 shadow-md"
      >
        + Neuer Eintrag
      </button>
    </div>
  );
}
