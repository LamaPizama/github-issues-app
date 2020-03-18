import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const NAVIGATION_MODIFIERS = {

    'active': () => css`
        background: #292a48;
    `

}

export default styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    height: 50px;
    cursor: pointer;
    transition: background-color ease-in-out 100ms;

    &:hover {
        background: #292a48
    }

    ${applyStyleModifiers(NAVIGATION_MODIFIERS)}
`
