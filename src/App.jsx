import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import EntryList from "./components/EntryList";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  const [entries, setEntries] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

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
    setIsFormOpen(false);
    alert("Erfolgreich gespeichert!");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header onOpenForm={() => setIsFormOpen(true)} />

        <main className="flex-grow p-6 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-300 mb-6 px-4">
            Meine Tagebucheinträge
          </h2>

          <EntryList entries={entries} onViewEntry={setSelectedEntry} />
        </main>

        <Footer />
      </div>

      {isFormOpen && (
        <Form
          onAddEntry={handleAddEntry}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      {selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </>
  );
}

export default App;
