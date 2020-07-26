import styled from 'styled-components'
import { theme } from '../../constants';
export const StyledContent = styled.div`
    
    overflowY: 'scroll';
    display: flex;
    flex-direction: ${props=>props.row ? `row`:`column` };
    margin-left: ${props=>props.paddingLeftRight};
    margin-right: ${props=>props.paddingLeftRight};
    padding-top: 2em;
    max-width: 100%;

    @media (max-width: 640px) {
        overflowY: 'scroll';
        display: flex;
        flex-direction: ${props=>props.row ? `row`:`column` };
        padding:${props=>props.padding}rem;
    }

`;

export const BelowHeader = styled.div`
    
    overflowY: 'scroll';
    display: table;
    flex-direction: column;
    padding-left: ${theme.webSizes.containerLeftPadding};
    padding-right:  ${theme.webSizes.containerRightPadding};
    padding-top: ${theme.webSizes.containerHeaderPadding};
    padding-bottom:  ${theme.webSizes.containerBottomPadding};
    @media (max-width: 640px) {
        overflowY: 'scroll';
        display: flex;
        flex-direction: column;
        padding-left: ${theme.mobileSizes.containerLeftPadding};
        padding-right:  ${theme.mobileSizes.containerRightPadding};
        padding-top: ${theme.mobileSizes.containerHeaderPadding};
        padding-bottom:  ${theme.mobileSizes.containerBottomPadding};
    }

`;
export const ArticleBelowHeader = styled(BelowHeader)`
    padding-left: 4em;
    padding-right:  4em;
    padding-top: 0em;
    padding-bottom: 0em;
    
`;
