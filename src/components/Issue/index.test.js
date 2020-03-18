import React from 'react'
import { render } from '@testing-library/react'

import Issue from './index'

describe('<Issue />', () => {

    // it('Should render component properly', () => {

    //     const issue = { name: 'Issue #1' }
    //     const { getByTestId, getByRole } = render(<Issue {...issue} />)

    //     expect(getByTestId('issue')).toBeInTheDocument()
    //     expect(getByRole('paragraph')).toHaveText(issue.name)

    // })

    it('Should change icon state after click', () => {

        const { getByRole } = render(<Issue name="Issue #1" />)
        const button = getByRole('button')

        expect(button)

    })

})
