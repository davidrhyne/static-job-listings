import styled from 'styled-components'
import { MEDIA_QUERY } from '../../../constants/constants'

export const JobListingContainer = styled.div`
    padding: 3em 1em;
    background: #EFFAFA;
    @media (min-width: ${MEDIA_QUERY.MIN_WIDTH}) {
        padding: 3em;
    }
`