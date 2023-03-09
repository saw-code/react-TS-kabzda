import {useCallback, useMemo, useState} from "react";


export const LikeUseCallback = () => {
  console.log("LikeUseCallback")
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

  const memoizedAddBook = useMemo(() => {
    console.log(books)
    return () => {
      const newUsers = [...books, "Angular" + new Date().getTime()]
      setBooks(newUsers)
    }
  }, [books])

  const memoizedAddBook2 = useCallback(() => {
    console.log(books)
    const newUsers = [...books, "Angular" + new Date().getTime()]
    setBooks(newUsers)
  }, [books])

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    {/*<Book addBook={memoizedAddBook}/>*/}
  </>
}

type BookSecretPropsTpe = {
  addBook: () => void
}

const BookSecret = (props: BookSecretPropsTpe) => {
  console.log("BookSecret")
  return <div>
    <button onClick={() => props.addBook}>add book</button>
  </div>
}

// const Book = React.memo(BookSecret)