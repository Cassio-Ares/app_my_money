import styled from 'styled-components/native'


export type LoadingTypes = {
    background?:string;
    loadColor?: string;
  }

export const Container = styled.View<LoadingTypes>`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: ${({theme, background})=> background ? background : theme.COLORS.PRIMARY};
`

export const LoadIndicator = styled.ActivityIndicator.attrs<LoadingTypes>(({theme, loadColor})=> ({
    color: loadColor ? loadColor : theme.COLORS.LIGHT,
    size: 'large'
}))<LoadingTypes>``;
