import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  items: string[]
}

function UncontrolledAccordion(props: AccordionPropsType) {
   let [collapsed, setCollapsed] = useState(true)

  const onClickHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
      {!collapsed && <AccordionBody title={props.items}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
  title: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.title.map((el, index) => {
        return <li key={index}>{el}</li>
      })}
    </ul>
  )
}

export default UncontrolledAccordion