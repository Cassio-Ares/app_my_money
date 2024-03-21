import { TextInputProps } from 'react-native';
import {InputElement} from './style';

type Props = TextInputProps;

export function Input({...rest}:Props){
    return (
       <InputElement {...rest} />
    )
}