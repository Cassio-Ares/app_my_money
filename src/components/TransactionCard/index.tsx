import { Container, ContentTop, Name, Tag, TagTitle, Value, ContentBotton, CategoryTitle, Date, CardTypes } from "./style";

export interface TransactionCardsProps {
    name: string;
    type: CardTypes;
    value: string;
    category?: string;
    date: string;
}

export function TransactionCard({ name, type, value, category, date }: TransactionCardsProps) {

    const typeName = type === "up" ? "Entrada" : "Saida";
    
  return (
    <Container>
      <ContentTop>
        <Name>{name}</Name>
        <Tag type={type}>
            <TagTitle>{typeName}</TagTitle>
        </Tag>
      </ContentTop>
      
      <Value type={type}>{value}</Value>

      <ContentBotton>
        <CategoryTitle>{category} </CategoryTitle>
        <Date> {date} </Date>

      </ContentBotton>
    </Container>
  );
}
