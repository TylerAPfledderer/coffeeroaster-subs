import { Dispatch, SetStateAction } from "react";
import useLocalStorage from "./useLocalStorage";

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useCurrentInputValues<T>(
  keyName: string,
  initialValue: T,
): [T, SetValue<T>, () => void] {
  const [inputValues, setInputValues] = useLocalStorage(keyName, initialValue);
  const resetInputValues = () => setInputValues(initialValue);
  return [inputValues, setInputValues, resetInputValues];
}

export default useCurrentInputValues;
