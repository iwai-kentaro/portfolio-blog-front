import { atom, useAtom } from "jotai";

export const postTitleValueState = atom<string | undefined>("");

export const usePostTitleValueState = () => {
  const [state, setState] = useAtom(postTitleValueState);

  const setTitleValue = (value: string | undefined) => {
    setState(value);
  };

  return { titleValue: state, setTitleValue };
};
