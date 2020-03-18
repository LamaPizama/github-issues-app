import React from 'react'

import { Content } from '@gia/layout/components'

import Issues from '@gia/components/Issues'

const issues = {
    '19-07-2016':[
        {
            'name': 'Page changes',
            'star': true
        },
        {
            'name': 'Review of last names',
            'star': true
        }
    ],
    '18-07-2016': [
        {
            'name': 'Visual UI Update Review',
            'star': false
        },
        {
            'name': 'Sidebar changes',
            'star': false
        }
    ],
    '15-07-2016': [
        {
            'name': 'Crash update',
            'star': false
        },
        {
            'name': 'Page visual UI Update Review',
            'star': true
        },
        {
            'name': 'Sidebar update',
            'star': false
        }
    ],
    '14-07-2016':[
        {
            'name': 'Crash name',
            'star': true
        },
        {
            'name': 'Visual update & Crash resolve',
            'star': true
        }
    ],
    '13-07-2016':[
        {
            'name': 'Bug fixes',
            'star': true
        },
        {
            'name': 'Visual changes',
            'star': false
        }
    ]
}

export default () => {
    return (
        <Content data-testid="content">
            <Content.List>
                <Issues data={issues} />
            </Content.List>
        </Content>
    )
}
