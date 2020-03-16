import styled from 'styled-components'

import Sidebar from './Sidebar'
import Content from './Content'

const Window = styled.div`
    width: 650px;
    height: 500px;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 0 15px rgba(0, 0, 0, .5);
    display: flex;
`

Window.Sidebar = Sidebar
Window.Content = Content

export default Window
