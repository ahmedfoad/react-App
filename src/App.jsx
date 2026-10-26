import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import { TabButton } from "./components/TabButton/TabButton";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {
            <ul>
              {CORE_CONCEPTS.map((concept) => (
                <CoreConcepts key={concept.title} {...concept} />
              ))}
            </ul>
          }
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              Lifecycle
            </TabButton>
          </menu>
          {!tabContent && <p>Click on a tab to see the content.</p>}
          {tabContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent]?.title}</h3>
              <p>{EXAMPLES[tabContent]?.description}</p>
              <pre>
                <code>{EXAMPLES[tabContent]?.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
