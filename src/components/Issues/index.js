import React from 'react'
import shortid from 'shortid'

import { Issues } from '@gia/layout/components'
import Issue from '@gia/components/Issue'

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
            'name': 'Content update',
            'star': true
        },
        {
            'name': 'Bug fixes',
            'star': true
        }
    ]
}

export default () => {
    return (
        <Issues>
            {Object.keys(issues).map(key => (
                <Issues.Group key={shortid.generate()}>
                    <Issues.Timestamp>{key}</Issues.Timestamp>
                    {issues[key].map(issue => (
                        <Issues.Item>
                            <Issue key={shortid.generate} {...issue}/>
                        </Issues.Item>
                    ))}
                </Issues.Group>
            ))}
        </Issues>
    )
}
