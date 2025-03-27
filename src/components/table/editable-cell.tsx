import React, { cloneElement, JSX, ReactNode, useState } from "react";
import { ZodSchema } from "zod";

type EditableCellProps<T extends ReactNode> = {
  value: T; // Current cell value
  rowId: number; // Row ID for identifying the edited row
  editComponent: JSX.Element;
  onSave: (rowId: number, newValue: T) => void;
  validate?: ZodSchema<T>; // Accept a Zod schema for validation
};

export function EditableCell<T extends ReactNode>({
  value,
  rowId,
  editComponent,
  onSave,
  validate,
}: EditableCellProps<T>) {
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = (newValue: T) => {
    if (validate) {
      const result = validate.safeParse(newValue);
      if (!result.success) {
        setError(result.error.errors[0]?.message || "Invalid value");
        return;
      }
    }

    setEditing(false);
    setError(null);
    onSave(rowId, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value) as unknown as T;

    if (newValue !== value) {
      handleSave(newValue);
    } else {
      setEditing(false); // Close edit mode without saving
    }
  };

  return editing ? (
    <div>
      {cloneElement(editComponent, {
        onBlur: handleBlur,
      })}
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  ) : (
    <div onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
      {value}
    </div>
  );
}
