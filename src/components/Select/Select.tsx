import {useState} from "react";

type SelectPropsType = {
  collapsed: boolean
  onChange: () => void
}


export const Select = (props: SelectPropsType) => {

  let [title, setTitle] = useState(["DimOk", "Igor", "Serega", "Vitalya"])

  let firstValue = title[0]
  let filteredTitle = title.filter((el, index) => el !== firstValue)

  const changeTitle = (value: string) => {
    let sortedTitle = title.sort((x, y) => x === value ? -1 : y == value ? 1 : 0)
    setTitle([...sortedTitle])
  }

  return <>
    <div onClick={props.onChange}>{firstValue}</div>

    {props.collapsed && filteredTitle.map((el, index) =>
      <div key={index} onClick={() => changeTitle(el)}>{el}</div>
    )}
  </>
};
