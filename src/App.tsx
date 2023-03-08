import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Select} from "./components/Select/Select";
import {Example1} from "./components/ReactMemo/ReactMemo";
import {Example2} from "./stories/UseMemo";
import HookUseCallback from "./components/UseCallback/UseCallback";

// function declaration
function App(props: any) {
  // делает что-то полезное
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  const [value, setValue] = useState("2")


  // обязана вернуть JSX
  return (
    <div className={"App"}>
      {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
      {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      {/*<Accordion titleValue={"Users"}*/}
      {/*           collapsed={accordionCollapsed}*/}
      {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
      {/*           items={[*/}
      {/*             {title: "DimOk", value: 1},*/}
      {/*             {title: "Peppito", value:2},*/}
      {/*             {title: "Serega", value: 3},*/}
      {/*             {title: "Vitalya", value: 4}*/}
      {/*           ]}*/}
      {/*           onClick={(id) => {alert(`User with ID: ${id} should be happy`)} }*/}
      {/*/>*/}

      {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

      {/*<Select items={[*/}
      {/*  {value: "1", title: "Minsk"},*/}
      {/*  {value: "2", title: "Moscow"},*/}
      {/*  {value: "3", title: "Kiev"}*/}
      {/*]}*/}
      {/*        onChange={setValue}*/}
      {/*        value={value}*/}
      {/*/>*/}
      {/*<UncontrolledAccordion titleValue={"Menu"} items={["DimOk", "Peppito", "Serega", "Vitalya"]}/>*/}
      {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

      {/*<Example1 />*/}

      {/*<Example2 />*/}
      <HookUseCallback/>
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
