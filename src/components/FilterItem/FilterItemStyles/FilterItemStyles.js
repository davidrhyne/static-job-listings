import styled from 'styled-components'

export const FilterItemContainer = styled.div`


    display: flex;
    

`

export const FilterButton = styled.button`
    font-family: inherit;
    font-weight: 700;
    background: #EFFAFA;
    color: #5CA5A5;
    padding: 0 10px;
    height: 32px;
    border-radius: .5em 0 0 .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        background: #5CA5A5;
        color: #EFFAFA;
        /* //box-shadow: inset 0 0 0 0 #2B3939; */
        transition: all 500ms;
    }
`

export const FilterButtonClose = styled.span`
    /* box-sizing: border-box; */
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