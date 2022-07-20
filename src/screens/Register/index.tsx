import React, { useState } from "react";
import { Modal } from "react-native";
import {
    Input,
    Button,
    CategorySelectButton,
    TransactionTypeButton,
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

function Register() {
    const [transactionType, setTransactionType] = useState("");
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria",
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

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />

                    <TransactionsTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            isActive={transactionType === "up"}
                            onPress={() => handleTransactionsTypeSelect("up")}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            isActive={transactionType === "down"}
                            onPress={() => handleTransactionsTypeSelect("down")}
                        />
                    </TransactionsTypes>

                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelctCategoryModal}
                    />
                </Fields>
                <Button>Enviar</Button>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelctCategoryModal}
                />
            </Modal>
        </Container>
    );
}

export default Register;
