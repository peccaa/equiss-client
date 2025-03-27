import Select from "react-select";
import { SelectOption } from "@/types/common";

type SelectFieldProps<T = string | number> = {
  value: SelectOption<T> | null;
  options: SelectOption<T>[];
  onChange: (option: SelectOption<T> | null) => void;
  isLoading?: boolean;
  placeholder?: string;
  isClearable?: boolean;
};

export function SelectField<T = string | number>({
  value,
  options,
  onChange,
  isLoading = false,
  placeholder = "Select an option",
  isClearable = true,
}: SelectFieldProps<T>) {
  return (
    <Select
      value={value}
      options={options}
      onChange={onChange}
      isLoading={isLoading}
      placeholder={placeholder}
      isClearable={isClearable}
    />
  );
}
