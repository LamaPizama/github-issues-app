import styled from 'styled-components'

import Item from './Item'
import Content from './Content'
import Text from './Text'
import Icon from './Icon'
import Meta from './Meta'

const Navigation = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

Navigation.Item = Item
Navigation.Content = Content
Navigation.Text = Text
Navigation.Icon = Icon
Navigation.Meta = Meta

export default Navigation
