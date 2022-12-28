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
