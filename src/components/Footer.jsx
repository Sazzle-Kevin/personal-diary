export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-between text-center text-2xl w-screen h-auto rounded-b-lg bg-fuchsia-800 text-pink-200 overflow-hidden">
        <div className="flex flex-col justify-between">
          <ul>
            <li className="m-1 w-28 bg-fuchsia-400 rounded-xs">
              <a href="/" className="cursor-pointer">
                Banane
              </a>
            </li>
            <li className="m-1 w-28 bg-fuchsia-400 rounded-xs">
              <a href="/" className="cursor-pointer">
                Kirsche
              </a>
            </li>
            <li className="m-1 w-28 bg-fuchsia-400 rounded-xs">
              <a href="/" className="cursor-pointer">
                Pudding
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <p>Ich hoffe, du hattest einen schönen Tag! :D</p>
        </div>
      </div>
    </>
  );
}
