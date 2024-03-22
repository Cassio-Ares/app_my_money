import { Container, LoadIndicator, LoadingTypes} from "./style";


  export function Loading({background,  loadColor}: LoadingTypes) {
  return (
    <Container background={background} >
      <LoadIndicator loadColor={loadColor} />
    </Container>
  );
}
