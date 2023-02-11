import React from "react";

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: Array<ItemType>
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
      {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyPropsType = {
  items: Array<ItemType>
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el) => {
        return <li key={el.value} onClick={() => {props.onClick(el.value)}}>{el.title}</li>
      })}
    </ul>
  )
}

