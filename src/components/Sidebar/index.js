import React from 'react'

import { Sidebar, System } from '@gia/layout/components'
import Navigation from '@gia/components/Navigation'

export default () => {
    return (
        <Sidebar data-testid="sidebar">
            <Sidebar.System>
                <System>
                    <System.Button modifiers="close" />
                    <System.Button modifiers="minimize" />
                    <System.Button modifiers="open" />
                </System>
            </Sidebar.System>
            <Sidebar.Navigation>
                <Navigation />
            </Sidebar.Navigation>
        </Sidebar>
    )
}
