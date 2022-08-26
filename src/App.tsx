import { useState } from "react";
import "./App.css";

import "atomic-elements/dist/styles.css";
import "atomic-elements/dist/fonts.css";
import "atomic-elements/dist/variables.css";
import {
  Button,
  TextInput,
  IconButton,
  Tabs,
  Tab,
  NumberInput,
  RadioGroup,
  Radio,
  ToggleSwitch,
} from "atomic-elements";

function App() {
  const [currentTab, setCurrentTab] = useState("inputs");

  const [radioValue, setRadioValue] = useState("opt1");
  const [toggleChecked, setToggleChecked] = useState(false);

  return (
    <div className="padder">
      <Tabs
        tabs={{ inputs: { label: "Inputs" }, buttons: { label: "Buttons" } }}
        currentTab={currentTab}
        onChange={setCurrentTab}
      >
        <Tab name="inputs">
          <div className="padder">
            <TextInput label="Text Input" />
          </div>
          <div className="padder">
            <NumberInput label="Number Input" />
          </div>
          <div className="padder">
            <RadioGroup
              label="Radio Group Label"
              name="radiogroup"
              onChange={setRadioValue}
              value={radioValue}
            >
              <Radio value="opt1">Option 1</Radio>
              <Radio value="opt2">Option 2</Radio>
              <Radio value="opt3">Option 3</Radio>
            </RadioGroup>
          </div>
          <div className="padder">
            <ToggleSwitch
              label="Toggle Switch"
              checked={toggleChecked}
              onChange={setToggleChecked}
            />
          </div>
        </Tab>
        <Tab name="buttons">
          <div className="padder">
            <Button>Primary</Button>
            <Button className="secondary">Secondary</Button>
            <Button className="success">Success</Button>
            <Button className="error">Error</Button>
            <Button className="inverted">Inverted</Button>
          </div>
          <div className="padder">
            <IconButton icon="more_vert" ariaLabel="move" />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
