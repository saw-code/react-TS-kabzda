import {useMemo, useState} from "react";

const list = [1, 4, 6, 7, 8, 2, 5]

const sortList = () => {
  console.log("sort")
  return list.sort((a, b) => a - b)
}

const UseMemoApp = () => {
  const [update, setUpdate] = useState(false)

  // const sortedList = sortList()

  console.log("app render")

  const sortedList = useMemo(sortList, [])

  return (
    <div>
      {sortedList.map((listItem) => (
        <div key={listItem}>{listItem}</div>
      ))}
      <button onClick={() => setUpdate(!update)}>update component</button>
    </div>
  )
}

export default UseMemoApp