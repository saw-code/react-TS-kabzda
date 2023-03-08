import {FC, memo, useCallback, useEffect, useMemo, useState} from "react";

type HelloButtonProps = {
  clickHelloButton: () => void
}

type CounterButtonProps = {
  counterChange: (counter: number) => void
  counter: number
}


const CounterButton: FC<CounterButtonProps> = ({counterChange, counter}) => {
  return <button onClick={() => counterChange(counter + 1)}>Click me</button>
}

const HelloButton: FC<HelloButtonProps> = memo(({clickHelloButton}) => {
  console.log("Hello button rerender")
  return <button onClick={clickHelloButton}>Say hello</button>
})

const MyApp = () => {
  const [counter, counterChange] = useState(0)

  // const clickHelloButton = () => {
  //   console.log("Hello")
  // }

  const clickHelloButton = useCallback(() => {
    console.log(("Hello"))
  }, [])

  return (
   <>
    <div>{counter}</div>
      <CounterButton counter={counter} counterChange={counterChange}/>
      <HelloButton clickHelloButton={clickHelloButton}/>
    </>
  )
}

export default MyApp;





// function HookUseCallback() {
//   const [message, setMessage] = useState<string>("Всем привет")
//   const [counter, setCounter] = useState(0)
//
//   const greeting = useCallback((text: string) => {
//     console.log(text)
//   }, [])
//
//   useEffect(() => {
//     greeting(message)
//   }, [greeting, message])
//
//   return (
//     <button onClick={() => setCounter(counter + 1)}>На меня нажали {counter} раз</button>
//   )
// }
//
// export default HookUseCallback;





// export const LikeUseCallback = () => {
//   console.log("LikeUseCallback")
//   const [counter, setCounter] = useState(0)
//   const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])
//
//   const memoizedAddBook = useMemo(() => {
//     console.log(books)
//     return () => {
//       const newUsers = [...books, "Angular" + new Date().getTime()]
//       setBooks(newUsers)
//     }
//   }, [books])
//
//   const memoizedAddBook2 = useCallback(() => {
//     console.log(books)
//     const newUsers = [...books, "Angular" + new Date().getTime()]
//     setBooks(newUsers)
//   }, [books])
//
//   return <>
//     <button onClick={() => setCounter(counter + 1)}>+</button>
//     {counter}
//     {/*<Book addBook={memoizedAddBook}/>*/}
//   </>
// }
//
// type BookSecretPropsTpe = {
//   addBook: () => void
// }
//
// const BookSecret = (props: BookSecretPropsTpe) => {
//   console.log("BookSecret")
//   return <div>
//     <button onClick={() => props.addBook}>add book</button>
//   </div>
// }

// const Book = React.memo(BookSecret)