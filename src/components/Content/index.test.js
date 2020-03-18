import React from 'react'
import Content from './index'
import { render } from '@testing-library/react'

describe('<Content />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<Content />)
        expect(getByTestId('content')).toBeInTheDocument()

    })

})
