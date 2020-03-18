import React from 'react'
import shortid from 'shortid'

import { Issues } from '@gia/layout/components'
import Issue from '@gia/components/Issue'

export default ({
    data = []
}) => {
    return (
        <Issues data-testid="issues">
            {Object.keys(data).map(key => (
                <Issues.Group key={shortid.generate()}>
                    <Issues.Timestamp>{key}</Issues.Timestamp>
                    {data[key].map(issue => (
                        <Issues.Item key={shortid.generate()} >
                            <Issue {...issue} />
                        </Issues.Item>
                    ))}
                </Issues.Group>
            ))}
        </Issues>
    )
}
