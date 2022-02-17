import styled from 'styled-components'

export const Scroll = styled.div `
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 992px){
        display: none;
    }
`
export const Mouse = styled.div `
    width: 50px;
    height: 90px;
    border: 4px solid #2D3748;
    border-radius: 60px;

    &::before{
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        top: 30px;
        background: #2D3748;
        left: 50%;
        transform: translate(-50%);
        border-radius: 50%;
        opacity: 1;
        animation: mouse 2s infinite;
    }

    @keyframes mouse {
        from{
            opacity: 1;
            top:20px;
        }
        to{
            opacity: 0;
            top: 80px;
        }
    }
`