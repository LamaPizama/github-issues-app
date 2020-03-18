import React from 'react'

import { Window } from '@gia/layout/components'

import Sidebar from '@gia/components/Sidebar'
import Content from '@gia/components/Content'

export default () => {
    return (
        <Window data-testid="window">
            <Window.Sidebar>
                <Sidebar />
            </Window.Sidebar>
            <Window.Content>
                <Content />
            </Window.Content>
        </Window>
    )
}
