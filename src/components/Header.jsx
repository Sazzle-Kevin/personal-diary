export default function Header() {
  return (
    <>
      <div className="text-center text-2xl w-screen h-auto rounded-b-lg bg-fuchsia-200 text-pink-800 overflow-hidden">
        <div className="flex justify-between">
          <button
            type="button"
            className="m-1 px-4 py-2 min-w-32 w-auto rounded-lg bg-purple-300 cursor-pointer truncate"
          >
            Calender
          </button>
          <button className="grow m-1 px-4 py-2 w-5/6 rounded-lg bg-purple-300 cursor-pointer truncate">
            Mein Tag
          </button>
        </div>
      </div>
    </>
  );
}
