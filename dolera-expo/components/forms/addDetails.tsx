import { View } from "react-native";
import CustomInput from "./inputs/customInput";
import { useState } from "react";
import ExpenseRepository, {
  Expense,
} from "./../../src/database/ExpenseRepository";
import { ExpenseForm } from "../../types/ExpenseForm";
import CustomButton from "../customButton";
import { ExpenseZod } from "../../schemas/Expense";
import { z } from "zod";
import { useRouter } from "expo-router";

interface AddDetailsProps {
  chosenCategories: number[];
}

const repository = new ExpenseRepository();

export default function AddDetails({ chosenCategories }: AddDetailsProps) {
  const router = useRouter();
  const [errors, setErrors] = useState<
    Partial<Record<keyof ExpenseForm, string>>
  >({}); //GUARDANDO OS ERROS
  const [expenses, setExpenses] = useState<Expense[]>([]); //GUARDANDO GASTOS QUE VEM DO BANCO DE DADOS
  const [expenseForm, setExpenseForm] = useState<ExpenseForm>({
    trip_id: "1",
    category_id: chosenCategories[0].toString(),
    name: "",
    note: "",
    date: "",
    amount: "",
  }); //GUARDANDO INPUTS DO USUÁRIO

  const handleBackHome = () => {
    if (router.canDismiss()) {
      router.dismissAll();
      console.log("dismissed");
    }
    router.push("/(auth)/home");
  };

  //PERSISTINDO UM GASTO
  const create = async (data: ExpenseZod) => {
    const id = await repository.create({
      trip_id: data.trip_id,
      category_id: data.category_id,
      name: data.name,
      note: data.note,
      date: data.date,
      amount: data.amount,
    });

    console.log("Created: ", id);
    await all();
  };

  //BUSCANDO TODOS OS GASTOS REGISTRADOS
  const all = async () => {
    const expenses = await repository.all();
    setExpenses(expenses);

    console.log(`Os gastos registrados no db são:`, expenses);
  };

  //FAZENDO PARSE DOS INPUTS DO USUÁRIO COM ZOD
  const submit = () => {
    try {
      const data = ExpenseZod.parse(expenseForm);

      console.log("DEPOIS:", data);

      setErrors({});

      //salvando no banco
      create(data);

      console.log("Gasto salvo com sucesso!");

      handleBackHome();
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ExpenseForm, string>> = {};

        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ExpenseForm;

          fieldErrors[field] = issue.message;
        });

        setErrors(fieldErrors);

        console.log("Erro ao enviar o formulário! ERROS:", fieldErrors);
      }
    }
  };

  return (
    <View>
      <CustomInput
        label="Name"
        placeholder="Airplane tickets"
        prop="name"
        setExpenseForm={setExpenseForm}
        expenseForm={expenseForm}
        errors={errors}
      ></CustomInput>
      <CustomInput
        label="Note"
        placeholder="São Paulo - Paris"
        prop="note"
        setExpenseForm={setExpenseForm}
        expenseForm={expenseForm}
        errors={errors}
      ></CustomInput>
      <CustomInput
        label="Date"
        placeholder="10/12/2026"
        prop="date"
        setExpenseForm={setExpenseForm}
        expenseForm={expenseForm}
        errors={errors}
      ></CustomInput>
      <CustomInput
        label="Amount"
        placeholder="2.500"
        prop="amount"
        setExpenseForm={setExpenseForm}
        expenseForm={expenseForm}
        errors={errors}
      ></CustomInput>

      <View className="mt-12">
        <CustomButton.coral onPress={submit} title="CREATE EXPENSE" />
      </View>
    </View>
  );
}
