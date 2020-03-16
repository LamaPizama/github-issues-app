import styled from 'styled-components'

import Item from './Item'
import Timestamp from './Timestamp'
import Group from './Group'

const Issues = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

Issues.Item = Item
Issues.Timestamp = Timestamp
Issues.Group = Group

export default Issues
