import styled from 'styled-components'

const SelectorStyled = styled.select`
border: none;
/* background: var(--button-bg); */
background: gray;
block-size: 2.5rem;
border-radius: 8px;

color: var(--white);
padding-inline: 1rem;
& option {
    background: var(--buttonBG);

    @media screen and (prefers-color-scheme: light) {
    border: 1px solid var(--grey);
    background-color: var(--white);
    color: var(--black-2);
    &:focus {
      background-color: var(--white);
    }
  }
}
`

function Selector(props) {
    const changeSelection = (evt) => {           
        if (props.changeSelection)
            props.changeSelection(evt);
    }

    return (
        <SelectorStyled onChange={changeSelection}>
            { props.children }
        </SelectorStyled>
    )
}

export default Selector
