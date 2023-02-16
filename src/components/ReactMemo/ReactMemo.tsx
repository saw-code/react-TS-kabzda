import React, {useState} from 'react'

export default {
  title: "React.memo demo"
}


export const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: Array<string> }) => {
  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["DimOk", "Peppito", "Atrem"])

  const addUser = () => {
    const newUsers = [...users, "Vika" + new Date().getTime()]
    setUsers(newUsers)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>addUser</button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
  </>
}

