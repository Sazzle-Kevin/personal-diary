import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen bg-gray-900">
        <Header />
        <main className="flex flex-grow  items-center justify-center p-6">
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
