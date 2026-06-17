import { z } from "zod";

export const ExpenseZod = z.object({
  id: z.optional(z.coerce.number()), 
  trip_id: z.coerce.number(),
  category_id: z.coerce.number(),
  name: z.string().nonempty("A name is required").min(3, "The expense's name must be at least three characters"),
  note: z.string(),
  date: z.string(),
  amount: z.coerce.number("The amount must be a number!"),
});

export type ExpenseZod = z.infer<typeof ExpenseZod>;