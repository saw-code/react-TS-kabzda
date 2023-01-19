import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      {!props.collapsed && <AccordionBody title={props.titleValue}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
  title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default Accordion