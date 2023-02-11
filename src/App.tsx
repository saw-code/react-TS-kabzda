import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

// function declaration
function App(props: any) {
  // делает что-то полезное
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  // обязана вернуть JSX
  return (
    <div className={"App"}>
      {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion titleValue={"Users"}
                 collapsed={accordionCollapsed}
                 onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

      <UncontrolledAccordion titleValue={"Menu"}/>
      {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

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
