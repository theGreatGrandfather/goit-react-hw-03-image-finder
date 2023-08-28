import styled from '@emotion/styled'
import { Audio } from  'react-loader-spinner'

export const Item = styled(Audio)`
    height: 80px;
    width: 80px;
    border-radius: 9px;
    color: 'green';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* ariaLabel: 'three-dots-loading'     ;
    wrapperStyle;
    wrapperClass; */
`

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`