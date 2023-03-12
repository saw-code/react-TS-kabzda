import React, {useCallback, useMemo} from 'react';

export const UseCallbackExample = () => {
  const [count1, setCount1] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  // useMemo работает с данными
  // const increaseCounter312 = useMemo(() => {
  //   return [1, 2]
  // }, [])
  //
  // const increaseCounter2 = useMemo(() => {
  //   setCount2(count2 => count2 + 1)
  // }, [])

  // useCallback работает с функциями
  const increaseCounter1 = useCallback(() => {
    setCount1(count1 + 1) // 0
  }, [count1])

  const increaseCounter2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <>
      <Counter value={count1} onClick={increaseCounter1}>Counter 1</Counter>
      <Counter value={count2} onClick={increaseCounter2}>Counter 2</Counter>
    </>
  )
}

const Counter = React.memo(({value, children, onClick}) => {
  console.log('Render: ', children)

  return (
    <button onClick={onClick}>
      {children}: {value}
    </button>
  )
})
