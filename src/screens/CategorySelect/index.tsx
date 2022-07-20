import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../shared/components";
import { categories } from "../../shared/utils/categories";
import * as S from "./styles";

interface ICategory {
    key: string;
    name: string;
}

interface IProps {
    category: ICategory;
    setCategory: (item: ICategory) => void;
    closeSelectCategory: () => void;
}

function CategorySelect({
    category,
    setCategory,
    closeSelectCategory,
}: IProps) {
    function handleCategorySelect(item: ICategory) {
        setCategory(item);
    }
    return (
        <S.Container>
            <S.Header>
                <S.Title>Categoria</S.Title>
            </S.Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: "100%" }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <S.Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <S.Icon name={item.icon} />
                        <S.Name>{item.name}</S.Name>
                    </S.Category>
                )}
                ItemSeparatorComponent={() => <S.Separator />}
            />

            <S.Footer>
                <Button children="Selecionar" onPress={closeSelectCategory} />
            </S.Footer>
        </S.Container>
    );
}

export default CategorySelect;
