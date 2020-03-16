import React from 'react'

import { Content } from '@gia/layout/components'

import Issues from '@gia/components/Issues'

export default () => {
    return (
        <Content>
            <Content.List>
                <Issues />
            </Content.List>
        </Content>
    )
}
