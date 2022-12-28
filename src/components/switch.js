import styled from 'styled-components'
import ReactSwitch from 'react-switch'
import React, { useState } from "react"

const SwitchStyled = styled.div`
grid-area: switch;
/* border: 1px solid red; */
display: flex;
justify-content: flex-end;
margin-block-start: 1rem;

@media screen and (max-width: 360px) {
margin: 0;
}
`

function Switch({ toggleTheme, isLightTheme }) {
    const [isToggled, setIsToggled] = useState(isLightTheme);
    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleTheme();
      };

    return (
        <SwitchStyled className='toggle-switch'>
            <ReactSwitch type='checkbox' checked={isToggled} onChange={onToggle} />
        </SwitchStyled>
    )
}

export default Switch
