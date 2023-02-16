import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
  titleValue: string
  items: string[]
}


function UncontrolledAccordion(props: AccordionPropsType) {
   // let [collapsed, setCollapsed] = useState(false)
   let [state, dispatch] = useReducer(reducer, {collapsed: false})

  // const onClickHandler = () => {setCollapsed(!collapsed)}
  const onClickHandler = () => {dispatch({type: TOGGLE_COLLAPSED})}

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={() => {
       dispatch({type: TOGGLE_COLLAPSED})}}/>
      {!state.collapsed && <AccordionBody title={props.items}/>}
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