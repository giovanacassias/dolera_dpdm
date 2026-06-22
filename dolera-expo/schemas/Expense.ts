import { z } from "zod";

export const ExpenseZod = z.object({
  id: z.optional(z.coerce.number()), 
  trip_id: z.coerce.number(),
  category_id: z.coerce.number(),
  name: z.string().min(3, "The expense's name must be at least three characters"),
  note: z.string(),
  date: z.string(),
  amount: z.coerce.number("The amount must be a number!").refine((value) => value > 0, {
    message: "The amount can't be empty",}),
});

export type ExpenseZod = z.infer<typeof ExpenseZod>;