import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {

  let tabButton = "Please Select button"
  function handleSelect(selectedButton) {
    tabButton = selectedButton
    console.log(tabButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}> Components </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton onSelect={() => handleSelect("props")}> Props </TabButton>
            <TabButton onSelect={() => handleSelect("state")}> State </TabButton>
          </menu>
          {tabButton}
        </section>
      </main>
    </div> 
  );
}

export default App;
