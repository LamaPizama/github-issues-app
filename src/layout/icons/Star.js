import React from 'react'
import Star from './wrappers/Star'

export default props => {
    return (
        <Star {...props}>
            <svg
                preserveAspectRatio="xMidYMid"
                width="1em"
                height="1em"
                viewBox="0 0 17 16"
            >
                <path
                    d="M8.5 0l2.801 5.028 5.698 1.084-3.966 4.19.72 5.698L8.5 13.561 3.247 16l.72-5.698-3.966-4.19 5.698-1.084L8.5 0"
                    fillRule="evenodd"
                />
            </svg>
        </Star>
    )
}
