import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClick: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
  const onClickHandler = () => {
    props.onClick(!props.collapsed)
  }

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
      {props.collapsed && <AccordionBody title={props.titleValue}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>{props.title}</h3>
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