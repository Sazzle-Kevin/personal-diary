import { useState } from "react";

export default function Form({ onAddEntry, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      alert("Bitte fülle alles aus.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      ...formData,
    };

    if (onAddEntry) {
      onAddEntry(newEntry);
    }

    setFormData({
      title: "",
      date: "",
      image: "",
      content: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between w-full max-w-md bg-fuchsia-200 rounded-xl border-4 border-fuchsia-800/50 shadow-2xl p-4"
      >
        <div className="flex justify-between items-center p-2">
          <h2 className="italic text-4xl font-serif font-bold text-pink-800">
            Mein Tag
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-pink-800 hover:text-pink-600 font-bold text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="grow flex flex-col p-2">
          <div className="flex my-4">
            <div className="flex flex-col w-auto ">
              <label htmlFor="date" className="cursor-pointer">
                {<strong>Datum: </strong>}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer text-pink-950 focus:outline-none"
              />
            </div>
            <div className="flex flex-col ml-3 grow">
              <label htmlFor="image" className="cursor-pointer">
                {<strong>Bild: </strong>}
              </label>
              <input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Bild-URL"
                className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer text-pink-950 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="title" className="cursor-pointer">
              {<strong>Überschrift: </strong>}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Überschrift"
              className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer text-pink-950 focus:outline-none"
            />
          </div>
          <div className="grow flex flex-col overflow-hidden min-h-[150px]">
            <label htmlFor="content" className="cursor-pointer">
              {<strong>Eintrag: </strong>}
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Heute habe ich ..."
              className="grow p-4 font-serif bg-pink-300 rounded-lg cursor-pointer text-pink-950 focus:outline-none resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="m-1 py-2 px-4 w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-lg cursor-pointer transition text-center self-center"
        >
          Fertig
        </button>
      </form>
    </div>
  );
}
