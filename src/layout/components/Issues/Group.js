import styled from 'styled-components'

export default styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4.5px 0;

    &:first-of-type {
        padding: 0 0 4.5px 0;
    }

    &:last-of-type {
        padding: 4.5px 0 0 0;
    }
`
