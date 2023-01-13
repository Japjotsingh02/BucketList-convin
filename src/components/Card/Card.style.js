import styled from 'styled-components';

export const VideoCard=styled.div`
    text-align:center;
    background: rgba(255,255,255,0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
    border: 1px solid rgba(255, 255, 255, 0.29);
    width:18rem;
    height:20rem;
    margin:2rem 3rem;
    color:#ffffff;

    .title{
        font-size:1.1rem;
        font-weight:700;
        text-transform:capitalize;
    }

    .category{
        font-size:1.1rem;
        font-weight:700;
        text-transform:capitalize;
    }

    .button{
        border:1px solid black;
        color:#ffffff;
        font-size:0.8rem;
        cursor:pointer;
        font-weight:700;
        padding:0.5rem;
        background-color:#000000;
        margin:1rem 1rem;
    }

    .video-icon{
        width:11rem;
        height:11rem;
        cursor:pointer;
    }
`;