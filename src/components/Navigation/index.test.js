import React from 'react'
import Navigation from './index'
import { render } from '@testing-library/react'

describe('<Navigation />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<Navigation />)
        expect(getByTestId('navigation')).toBeInTheDocument()

    })

})
