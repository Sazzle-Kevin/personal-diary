import { useState } from "react";

export default function Form({ onAddEntry }) {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between w-full max-w-md h-full bg-fuchsia-200 rounded-xl border-4 border-fuchsia-800/50 "
    >
      <h2 className=" p-4 italic text-4xl font-serif font-bold text-pink-800 mb-4">
        Mein Tag
      </h2>
      <div className="grow  flex flex-col p-2">
        <div className="flex my-4">
          <div className="felx felx-col w-auto ">
            <label htmlFor="date" className="cursor-pointer">
              {<strong>Datum: </strong>}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
              className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="image" className="cursor-pointer">
              {<strong>Bild: </strong>}
            </label>
            <input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer"
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
            className="px-4 py-2 bg-pink-300 rounded-lg cursor-pointer"
          />
        </div>
        <div className="grow flex flex-col overflow-hidden">
          <label htmlFor="content" className="cursor-pointer">
            {<strong>Eintrag: </strong>}
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Heute habe ich ..."
            className="grow p-4 font-serif bg-pink-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <button
        type="submit"
        className="m-1 py-2 px-4 w-auto bg-fuchsia-600 rounded-lg cursor-pointer"
      >
        Fertig
      </button>
    </form>
  );
}
