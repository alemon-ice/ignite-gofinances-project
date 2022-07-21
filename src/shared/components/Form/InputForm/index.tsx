import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import Input from "../Input";

import * as S from "./styles";

interface IProps extends TextInputProps {
    control: Control;
    name: string;
    error?: string;
}

function InputForm({ control, name, error, ...rest }: IProps) {
    return (
        <S.Container>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        {...rest}
                        onChangeText={onChange}
                        value={value}
                        style={{ marginBottom: 0 }}
                    />
                )}
            ></Controller>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Container>
    );
}

export default InputForm;
