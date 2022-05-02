import Header from "./components/Header";
import Entry from "./components/Entry";
import Entries from "./data";

function App() {
  const entries = Entries.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });
  return (
    <div>
      <Header />
      {entries}
    </div>
  );
}

export default App;
