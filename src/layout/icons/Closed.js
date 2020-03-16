import React from 'react'
import Closed from './wrappers/Closed'

export default props => {
    return (
        <Closed  {...props}>
            <svg
                preserveAspectRatio="xMidYMid"
                width="1em"
                height="1em"
                viewBox="0 0 510 510"
            >
                <path
                    d="M150.45 206.55l-35.7 35.7L229.5 357l255-255-35.7-35.7-219.3 219.3-79.05-79.05zM459 255c0 112.2-91.8 204-204 204S51 367.2 51 255 142.8 51 255 51c20.4 0 38.25 2.55 56.1 7.65l40.8-40.8C321.3 7.65 288.15 0 255 0 114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255h-51z"
                    fill="#fff"
                    fillRule="evenodd"
                />
            </svg>
        </Closed>
    )
}
