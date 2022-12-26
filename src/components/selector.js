import styled from 'styled-components'

const SelectorStyled = styled.select`
border: none;
background: var(--button-bg);
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
