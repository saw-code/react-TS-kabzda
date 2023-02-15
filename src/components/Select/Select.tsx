import {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: string
  onChange: (value: string) => void
  items: ItemType[]
}


export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const toggleItems = () => {
    setActive(!active)
  }

  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {

      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]

          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            break
          }
        }
      }
    }

    if (e.key === "Escape" || e.key === "Enter") {
      setActive(false)
    }
  }

  return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={styles.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>

      {active
        ? <div className={styles.items}>
          {props.items.map(i => <div
            onMouseEnter={() => setHoveredElementValue(i.value)}
            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
            key={i.value}
            onClick={() => {
              onItemClick(i.value)
            }}
          >{i.title}</div>)}
        </div>
        : ""
      }
    </div>
  )
};


// type SelectPropsType = {
//   collapsed: boolean
//   onChange: () => void
// }


// export const Select = (props: SelectPropsType) => {
//
//   let [title, setTitle] = useState(["DimOk", "Igor", "Serega", "Vitalya"])
//
//   let firstValue = title[0]
//   let filteredTitle = title.filter((el, index) => el !== firstValue)
//
//   const changeTitle = (value: string) => {
//     setTitle([...title.sort((x, y) => x === value ? -1 : y == value ? 1 : 0)])
//   }
//
//   return (
//     <div>
//       <div onClick={props.onChange}>{firstValue}</div>
//       {props.collapsed && filteredTitle.map((el, index) =>
//         <div key={index} onClick={() => changeTitle(el)}>{el}</div>
//       )}
//     </div>
//   )
// };
