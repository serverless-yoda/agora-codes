import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

const commonStyle = css`
    padding: 10px 15px;
    cursor: pointer;
`
export const HeaderComponent = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLinkContainer = styled(Link)`
    ${commonStyle}
`

export const OptionDivContainer = styled.div`
    ${commonStyle}
`
