import React from 'react'
import Window from './index'
import { render } from '@testing-library/react'

describe('<Window />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<Window />)
        expect(getByTestId('window')).toBeInTheDocument()

    })

})
