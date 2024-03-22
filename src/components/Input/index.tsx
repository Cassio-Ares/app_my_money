import { TextInputProps } from "react-native";
import { InputElement } from "./style";
import { Control, Controller } from "react-hook-form";

interface Props extends TextInputProps {
    name: string;
    control: Control
}


export function Input({control, name, ...rest }: Props) {
  return (
   
      <Controller
       control={control}
       render={({field: {onChange, value}})=>(
         <InputElement 
         onChangeText={onChange}
        value={value}
         {...rest} />
       )}
       name={name}
       />
     
   
  );
}
