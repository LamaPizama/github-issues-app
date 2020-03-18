import React from 'react'

import { Navigation } from '@gia/layout/components'
import { Github, Open, Closed } from '@gia/layout/icons'

export default () => {
    return (
        <Navigation>

            <Navigation.Item modifiers="active">
                <Navigation.Content>
                    <Navigation.Icon>
                        <Github />
                    </Navigation.Icon>
                    <Navigation.Text>All</Navigation.Text>
                </Navigation.Content>
                <Navigation.Meta>12</Navigation.Meta>
            </Navigation.Item>

            <Navigation.Item>
                <Navigation.Content>
                    <Navigation.Icon>
                        <Open />
                    </Navigation.Icon>
                    <Navigation.Text>Open</Navigation.Text>
                </Navigation.Content>
                <Navigation.Meta>4</Navigation.Meta>
            </Navigation.Item>

            <Navigation.Item>
                <Navigation.Content>
                    <Navigation.Icon>
                        <Closed />
                    </Navigation.Icon>
                    <Navigation.Text>Closed</Navigation.Text>
                </Navigation.Content>
                <Navigation.Meta>8</Navigation.Meta>
            </Navigation.Item>

        </Navigation>
    )
}
