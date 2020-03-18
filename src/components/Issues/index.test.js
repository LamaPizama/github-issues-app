import React from 'react'
import Issues from './index'
import { render } from '@testing-library/react'

describe('<Issues />', () => {

    it('Should render component properly', () => {

        const { getByTestId } = render(<Issues />)
        expect(getByTestId('issues')).toBeInTheDocument()

    })

})
