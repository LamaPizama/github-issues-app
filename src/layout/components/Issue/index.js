import styled from 'styled-components'

import Text from './Text'
import Action from './Action'

const Issue = styled.div`
    width: 100%;
    display: flex;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    background: #ffffff;
`

Issue.Text = Text
Issue.Action = Action

export default Issue
