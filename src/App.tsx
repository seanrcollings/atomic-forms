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
  CustomSelect,
  Option,
} from "atomic-elements";
import FormTesting from "./FormTesting";

function App() {
  const [currentTab, setCurrentTab] = useState("form");

  const [radioValue, setRadioValue] = useState("opt1");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectValue, setSelectValue] = useState<string | null>("val1");

  return (
    <div className="padder">
      <Tabs
        tabs={{
          inputs: { label: "Inputs" },
          buttons: { label: "Buttons" },
          form: { label: "Form" },
        }}
        currentTab={currentTab}
        onChange={setCurrentTab}
      >
        <Tab name="inputs">
          <div className="padder">
            <TextInput label="Text Input" size="medium" />
          </div>
          <div className="padder">
            <NumberInput
              label="Number Input"
              max={10}
              value={number}
              onChange={(v) => {
                console.log(v);
                setNumber(v);
              }}
            />
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
          <div className="padder">
            <CustomSelect
              label={"Custom Select"}
              value={selectValue}
              onChange={setSelectValue}
            >
              <Option value="val1">Value 1</Option>
              <Option value="val2">Value 2</Option>
              <Option value="val3">Value 3</Option>
            </CustomSelect>
          </div>
        </Tab>
        <Tab name="buttons">
          <div className="padder">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
            <Button variant="inverted">Inverted</Button>
          </div>
          <div className="padder">
            <IconButton icon="more_vert" ariaLabel="move" />
          </div>
        </Tab>
        <Tab name="form">
          <FormTesting />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
