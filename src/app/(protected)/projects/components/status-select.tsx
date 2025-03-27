import { SelectOption } from "@/types/common";
import { useEffect, useState } from "react";
import { fetchStatuses } from "@/actions/fetch-statuses";
import { SelectField } from "@/components/form/select-field";

export function StatusSelect({
  value,
  onChange,
}: {
  value: SelectOption<number> | null;
  onChange: (option: SelectOption<number> | null) => void;
}) {
  const [options, setOptions] = useState<SelectOption<number>[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStatuses = async () => {
      setLoading(true);
      try {
        const statuses = await fetchStatuses();
        setOptions(
          statuses.map((status: any) => ({
            value: status.id,
            label: status.name,
          })),
        );
      } catch (error) {
        console.error("Failed to fetch statuses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStatuses().catch(console.error);
  }, []);

  return (
    <SelectField
      value={value}
      options={options}
      onChange={onChange}
      isLoading={loading}
      placeholder="Select a status"
    />
  );
}
