import React, { useState } from 'react'

import { Toggle } from '@gia/layout/elements'

export default ({
    on = false,
    render = () => null,
    children = () => null
}) => {

    const [ toggle, setToggle ] = useState(on)

    return (
        <Toggle onClick={() => setToggle(!toggle)}>
            {children(toggle) || render(toggle)}
        </Toggle>
    )
}
