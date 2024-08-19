import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  formOptionDetails,
  type CurrValOptions,
} from "@/data/formOptionDetails";

interface FormValuesCtxProps {
  currInputVals: Record<CurrValOptions, string>;
  setCurrInputVals: Dispatch<SetStateAction<Record<string, string>>>;
  formOptionDetails: typeof formOptionDetails;
  resetInputVals: () => void;
  isCapsuleSelected: boolean;
}

export const FormValuesContext = createContext<FormValuesCtxProps | null>(null);

export const useFormValuesContext = () => {
  const ctx = useContext(FormValuesContext);

  if (!ctx) {
    throw new Error(
      "useFormValuesContext must be used within a FormValuesContext Provider",
    );
  }

  return ctx;
};
