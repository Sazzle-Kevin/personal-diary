import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleAddEntry = (newEntry) => {
    const dateExists = entries.some((entry) => entry.date === newEntry.date);
    if (dateExists) {
      alert("Für dieses Datum gibt es schon einen Eintrag!");
      return;
    }

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
    alert("Erfolgreich im localStorage gespeichert!");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <Form onAddEntry={handleAddEntry} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
