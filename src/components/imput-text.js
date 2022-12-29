import styled from 'styled-components'

const InputText = styled.input`
border: 1px solid var(--grey);
background: var(--bg);
padding-inline: 1rem;
padding-block: .5rem;
font: var(--body2-regular);
border-radius: .5rem;
color: var(--white);
flex: 1;
&:focus {
    outline: 1px solid var(--primary);
}

@media screen and (max-width: 360px) {
inline-size: 22rem;
}

@media screen and (prefers-color-scheme: light) {
    background-color: var(--white);
    color: var(--black-2);
  }
`

// function ImputText() {
//     return (
//         <ImputTextStyled>
//             ImputText
//         </ImputTextStyled>
//     )
// }

export default InputText
