import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const ICON_MODIFIERS = {

    'active': () => css`
        svg {
            stroke: none;
            fill: #21233d;
        }
    `

}

export default styled.i`

    svg {
        fill: #ffffff;
        stroke: #e0e0e0;
    }

    ${applyStyleModifiers(ICON_MODIFIERS)}
`
