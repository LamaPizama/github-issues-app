import React from 'react'
import App from './index'
import { render } from '@testing-library/react'

describe('<App />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<App />)
        expect(getByTestId('app')).toBeInTheDocument()

    })

})
