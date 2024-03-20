import { Container, Content, Icon, Title, Value , BannerType} from './style'


 
interface BannerProps{
    title: string;
    type: BannerType;
    value: string;
}

export function Banner({title, type, value}: BannerProps){
    return(
        <Container type={type}>
            <Title>{title}</Title>
            <Content>
                <Icon type={type}/>
                <Value>{value}</Value>
            </Content>
        </Container>
    )
}