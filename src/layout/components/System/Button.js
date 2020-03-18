import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {

    'open': () => css`
        background: #00CD46;
    `,

    'minimize': () => css`
        background: #FFBC1B;
    `,

    'close': () => css`
        background: #FF594F;
    `

}

export default styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px;
    box-sizing: border-box;
    cursor: pointer;

    &:first-of-type {
        margin: 0;
    }

    &:last-of-type {
        margin: 0;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
