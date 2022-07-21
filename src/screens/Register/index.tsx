import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    Button,
    CategorySelectButton,
    TransactionTypeButton,
    InputForm,
} from "../../shared/components";
import CategorySelect from "../CategorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from "./styles";

interface IFormData {
    amount: string;
    name: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    amount: Yup.number()
        .typeError("Informe um valor numérico")
        .positive("O valor não pode ser negativo")
        .required("O valor é obrigatório"),
});

function Register() {
    const [transactionType, setTransactionType] = useState("");
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria",
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function handleTransactionsTypeSelect(type: "up" | "down") {
        setTransactionType(type);
    }

    function handleOpenSelctCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelctCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister(form: IFormData) {
        if (!transactionType)
            return Alert.alert("Selecione o tipo da transação");
        if (!category.key) return Alert.alert("Selecione a categoria");

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key,
        };

        console.log({ data });
    }

    console.log({ errors });

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            placeholder="Nome"
                            name="name"
                            control={control}
                            autoCorrect={false}
                            error={errors?.name?.message}
                        />
                        <InputForm
                            placeholder="Preço"
                            name="amount"
                            control={control}
                            keyboardType="numeric"
                            error={errors?.amount?.message}
                        />

                        <TransactionsTypes>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                isActive={transactionType === "up"}
                                onPress={() =>
                                    handleTransactionsTypeSelect("up")
                                }
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                isActive={transactionType === "down"}
                                onPress={() =>
                                    handleTransactionsTypeSelect("down")
                                }
                            />
                        </TransactionsTypes>

                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenSelctCategoryModal}
                        />
                    </Fields>
                    <Button onPress={handleSubmit(handleRegister)}>
                        Enviar
                    </Button>
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelctCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
}

export default Register;
