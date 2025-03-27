import { z } from "zod";

export const BudgetSchema = z
  .number()
  .min(0, "Budget must be at least 0")
  .max(20000000, "Budget cannot exceed 20,000,000");
