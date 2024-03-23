import { Container, Title } from "./style";

interface TotalProps{
    value: string;
}

export function Total({value}:TotalProps){
    return(
        <Container>
            <Title>{value}</Title>
        </Container>
    )
}