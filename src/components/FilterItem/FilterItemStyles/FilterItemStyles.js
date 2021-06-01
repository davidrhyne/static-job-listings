import styled from 'styled-components'
import { COLOR_SCHEME } from '../../../constants/constants'

export const FilterItemContainer = styled.div`


    display: flex;


`

export const FilterButton = styled.button`
    font-family: inherit;
    font-weight: 700;
    background: ${COLOR_SCHEME.SECONDARY};
    color: ${COLOR_SCHEME.PRIMARY};
    padding: 0 10px;
    height: 32px;
    border-radius: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        background: ${COLOR_SCHEME.PRIMARY};
        color: ${COLOR_SCHEME.SECONDARY};
        border-radius: .5em 0 0 .5em;
        transition: all 250ms;
    }
`

export const FilterButtonClose = styled.span`

    background: #5CA5A5;
    font-weight: 700;
    color: white;
    display: inline-block;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 3px;
    border-radius: 0 .5em .5em 0;
    /* margin: 0 1em 1em 0; */
    margin-right: 1em;
    margin-bottom: 1em;
    box-sizing: border-box;
    &:hover {
        background: #2B3939;
        /* //box-shadow: inset 0 0 0 0 #2B3939; */
        transition: all 500ms ease-in-out;
    }
`