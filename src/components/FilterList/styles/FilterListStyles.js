import styled from 'styled-components'



export const FilterListContainer = styled.div`
    width: 80%;
    background: white;
    margin: -2em auto 3em;

    /* border: 2px magenta solid; */
    padding: 1em 2em 0;
    display: flex;
    border-radius: .5em;

    box-sizing: border-box;


    
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const FilterListClear = styled.div`
    /* visibility: ${props => Object.keys(props.filters).length === 0 ? "hidden" : "visible"}; */
    
    color: #7C8F8F;
    font-weight: 700;
    display: flex;
    justify-content: center;
    left: 0;
    align-items: center;
    padding-top: 2px;
    /* margin: auto 0 auto auto; */
    margin-left: auto; 
    margin-right: 0;
    padding-bottom: 1em;
    /* margin-top: auto;
    margin-bottom: auto;
    background: lightsalmon; */
    /* justify-items: center; */

    &:hover {
        text-decoration: underline;
        color: #5CA5A5;
    }

`