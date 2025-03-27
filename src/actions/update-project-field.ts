"use server";

export async function updateProjectField<T>(
  rowId: number,
  field: string,
  value: T,
) {
  const response = await fetch(`http://localhost:8081/api/projects/${rowId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ [field]: value }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update ${field}`);
  }

  return await response.json();
}
