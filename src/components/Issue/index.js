import React from 'react'

import { Issue } from '@gia/layout/components'
import { Star } from '@gia/layout/icons'

import Toggle from '@gia/components/Toggle'

export default ({
    name,
    star = false
}) => {
    return (
        <Issue data-testid="issue">
            <Issue.Text>{name}</Issue.Text>
            <Issue.Action>
                <Toggle
                    data-testid="button-toggle"
                    on={star}
                >
                    {toggle => (
                        <Star
                            data-test-id="icon-start"
                            modifiers={[ toggle && 'active' ]}
                        />
                    )}
                </Toggle>
            </Issue.Action>
        </Issue>
    )
}
