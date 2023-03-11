import React, {useMemo} from 'react';

export const UseMemoExample = () => {

  const fooFunction = () => {
    return 'Foo is just Food without D'
  }

  const useMemoResult = React.useMemo(fooFunction, [])
  const useCallbackResult = React.useCallback(fooFunction, [])

  console.log('useMemoResult: ', useMemoResult)
  console.log('useCallbackResult: ', useCallbackResult)

  return <p>Foo is just food without D</p>
}

export const Me = ({girlFriendWords}) => {

  console.log(girlFriendWords)

  let decideWhatToSay = (girlFriendWords) => {
    return girlFriendWords
  }
  // Provided that girlFriendWords is a string

  const myReply = useMemo(() => decideWhatToSay(girlFriendWords), [girlFriendWords])
  // const myReply = decideWhatToSay(girlFriendWords)

  return <p>{myReply}</p>
}
