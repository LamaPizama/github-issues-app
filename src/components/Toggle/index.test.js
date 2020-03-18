import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Toggle from './index'

describe('<Toggle />', () => {

    it('Should render component properly', () => {

        const { getByRole } = render(<Toggle />)
        expect(getByRole('button')).toBeInTheDocument()

    })

    it('Should change toggle on click', () => {

        const spy = jest.fn()
        const { getByTestId } = render(<Toggle on={false} render={spy} />)
        const toggle = getByTestId('button-toggle')

        fireEvent.click(toggle)
        expect(spy).toHaveBeenCalledWith(true)

    })

})
