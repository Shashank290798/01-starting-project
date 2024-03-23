import React, { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton  isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components
              </TabButton>
              <TabButton  isSelected={selectedTopic === 'jsx'}  onSelect={() => handleSelect('jsx')}>JSX
              </TabButton>
              <TabButton  isSelected={selectedTopic === 'props'}  onSelect={() => handleSelect('props')}>Props
              </TabButton>
              <TabButton  isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State
              </TabButton>
          </menu>
          <div id="tab-content">
            {EXAMPLES[selectedTopic] ? (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
              </>
            ) : (
              <p>No examples found for the selected topic.</p>
            )}
          </div>
          {EXAMPLES[selectedTopic] && (
            <div id="tab-content1">
              <pre style={{ // Inline CSS for code block container
                padding: "1rem",
                borderRadius: "6px",
                backgroundColor: "#140524",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
              }}>
                <code style={{ // Inline CSS for code element
                  fontSize: "1rem",
                  color: "#ebe7ef"
                }}>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
