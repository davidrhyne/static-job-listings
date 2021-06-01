import styled, { keyframes } from 'styled-components'
import { COLOR_SCHEME, BOX_SHADOW } from '../../../constants/constants'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const FilterListContainer = styled.div`
    width: 80%;
    background: ${COLOR_SCHEME.WHITE};
    margin: -2em auto 1.5em;
    padding: 1em 2em 0;
    display: flex;
    border-radius: .5em;
    box-sizing: border-box;
    box-shadow: ${BOX_SHADOW.PRIMARY_COLOR};
    animation: ${fadeIn} 250ms;    
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FilterListClear = styled.div`
    color: ${COLOR_SCHEME.SECONDARY_DARKER};
    font-size: .8125rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    padding: 2px 0 1em;
    margin: 0 0 0 auto;
    &:hover {
        text-decoration: underline;
        color: ${COLOR_SCHEME.PRIMARY};
    }
`