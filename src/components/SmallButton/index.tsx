import { Button, Title, SmallButtonTypes} from './style'


interface SmallButtonProps{
  title: string;
  type: SmallButtonTypes;
  onPress: ()=> void;
  isSelected: boolean;
}

export function SmallButton({title, type, onPress, isSelected}: SmallButtonProps){
    return(
        <Button type={type} onPress={onPress} isSelected={isSelected} >
            <Title>{title}</Title>
        </Button>
    )
}