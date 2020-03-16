import styled from 'styled-components'

import System from './System'
import Navigation from './Navigation'

const Sidebar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #101022;
    border-radius: 10px 0 0 10px;
`

Sidebar.System = System
Sidebar.Navigation = Navigation

export default Sidebar
