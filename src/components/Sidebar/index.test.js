import React from 'react'
import Sidebar from './index'
import { render } from '@testing-library/react'

describe('<Sidebar />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<Sidebar />)
        expect(getByTestId('sidebar')).toBeInTheDocument()

    })

})
