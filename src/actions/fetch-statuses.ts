"use server";

export async function fetchStatuses() {
  const response = await fetch("http://localhost:8081/api/status");

  if (!response.ok) {
    throw new Error("Failed to fetch statuses");
  }

  return await response.json();
}
