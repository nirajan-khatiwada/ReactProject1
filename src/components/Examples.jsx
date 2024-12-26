import { EXAMPLES } from "./../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";

export default function Example() {
  const [selectedTopic, setSelectedValue] = useState(null);

  function ClickHandler(data) {
    setSelectedValue(data);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          onClick={() => ClickHandler("components")}
          isSelected={selectedTopic == "components" ? true : false}
        >
          Components
        </TabButton>
        <TabButton
          onClick={() => ClickHandler("jsx")}
          isSelected={selectedTopic == "jsx" ? true : false}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => ClickHandler("props")}
          isSelected={selectedTopic == "props" ? true : false}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => ClickHandler("state")}
          isSelected={selectedTopic == "state" ? true : false}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        {/* {selectedTopic && <div><h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
           <code>
           {EXAMPLES[selectedTopic].code}

           </code>
           </pre>
            </div>}
            {!selectedTopic && <div>Please Select The topic</div>} */}

        {selectedTopic ? (
          <div>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          <div>Please Select The topic</div>
        )}
      </div>
    </Section>
  );
}
