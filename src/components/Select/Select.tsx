import React, {Dispatch, SetStateAction} from 'react';

type SelectPropsType = {
  items: string[]
  setTitle: Dispatch<SetStateAction<string[]>>
}

export const Select = (props: SelectPropsType) => {

  const changeTitle = (value: string) => {
    props.setTitle(props.items.sort((x,y) => x === value ? -1 : y == value ? 1 : 0))
  }

  return (
    <div>
          {props.items.map(i => <div onClick={() => changeTitle(i)}>{i}</div>)}
    </div>
  );
};
