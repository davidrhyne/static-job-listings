import styled from 'styled-components'


// background: #EFFAFA;
// color: #5CA5A5;



export const JobPostContainer = styled.div`
    
    margin-bottom: 0 auto;
    padding: 1em;
    background: white;
    display: flex;
    flex-direction: column;
`
export const JobPostImage = styled.img.attrs(props => ({
    src: props.imagePath,
  }))`
    width: 50px;
    
    height: auto;
  `;

export const JobPostCompanyWrapper = styled.div`
    display: flex;
    border: 1px magenta solid;
`

// JobPostCompany,
// JobPostNewPost,
// JobPostFeatured

export const JobPostCompany = styled.div`

    border: 1px dodgerblue solid;
`
export const JobPostNewPost = styled.div`

    border: 1px limegreen solid;
`
export const JobPostFeatured = styled.div`

    border: 1px rebeccapurple solid;
`





// export const JobPostImage = styled.img.attrs({props =>
//     src: props.imagePath
// })`
//     max-width: 100%;
//     height: auto;
//     src: ${props => props.imagePath};
// `
