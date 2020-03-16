import React from 'react'

import { Issue } from '@gia/layout/components'
import { Star } from '@gia/layout/icons'

export default ({
    name,
    star
}) => {
    return (
        <Issue>
            <Issue.Text>{name}</Issue.Text>
            <Issue.Action>
                <Star modifiers={[ star && 'active' ]} />
            </Issue.Action>
        </Issue>
    )
}
