import React from 'react'
import shortid from 'shortid'

import { Issues } from '@gia/layout/components'
import Issue from '@gia/components/Issue'

export default ({
    data
}) => {
    return (
        <Issues>
            {Object.keys(data).map(key => (
                <Issues.Group key={shortid.generate()}>
                    <Issues.Timestamp>{key}</Issues.Timestamp>
                    {data[key].map(issue => (
                        <Issues.Item>
                            <Issue key={shortid.generate()} {...issue} />
                        </Issues.Item>
                    ))}
                </Issues.Group>
            ))}
        </Issues>
    )
}
