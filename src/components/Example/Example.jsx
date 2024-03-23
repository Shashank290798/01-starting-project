import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "../Section";
import { EXAMPLES } from "../../data";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title= "Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
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
          <pre
            style={{
              // Inline CSS for code block container
              padding: "1rem",
              borderRadius: "6px",
              backgroundColor: "#140524",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <code
              style={{
                // Inline CSS for code element
                fontSize: "1rem",
                color: "#ebe7ef",
              }}
            >
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )}
    </Section>
  );
}
