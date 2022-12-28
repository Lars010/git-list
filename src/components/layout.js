import styled from 'styled-components'
import Switch from './switch'
import Button from './button'

const LayoutStyled = styled.main`

min-block-size: 100vh;
max-inline-size: 75rem;
margin: auto;
padding-inline: 1.25rem;
padding-block: 2.5rem;
position: relative;
/* #light & {
    background-color: white;
}
#dark & {
    background-color: #0d1117;
} */
& .switch {
    position: absolute;
}

@media screen and (min-width: 768px) {
    display: grid;
    /* border: 10px solid red; */
    grid-template-columns: 278px 1fr;
    grid-template-rows: 35px auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "switch switch" "profile filters" "profile repo-list";

}

@media screen and (max-width: 414px) {
  display: grid;
  inline-size: 22.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto 1fr;
  grid-template-areas: "switch" "profile" "filters" "repo-list";
}
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout


