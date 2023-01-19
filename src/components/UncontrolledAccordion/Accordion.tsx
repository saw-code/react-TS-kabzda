import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering")

  let [collapsed, setCollapsed] = useState(false)

  const onClickHandler = () => {
    if(!collapsed) setCollapsed(true)
    if(collapsed) setCollapsed(false)
  }

  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      <button onClick={onClickHandler}>TOGGLE</button>
      {collapsed && <AccordionBody title={props.titleValue}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>-- {props.title} --</h3>
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

export default UncontrolledAccordion