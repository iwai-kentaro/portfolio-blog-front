import { atom, useAtom } from "jotai";

export const postContentAtom = atom<string | undefined>();

export const usePostContentValueState = () => {
  const [state, setState] = useAtom(postContentAtom);

  const setContentValue = (value: string | undefined) => {
    setState(value);
  };

  return { contentValue: state, setContent: setState, setContentValue };
};
