import styled from 'styled-components';

export const Title=styled.div`
    font-size:2rem;
    color:aliceblue;
    text-align:center;
    font-weight:700;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    justify-content: space-around;

    .bucket{
        flex:0.4;
    }

    .addCard{
        font-weight:700;
        font-size:0.8rem;
        padding:0.6rem;
        cursor:pointer;
        color:#000000;
        background-color:aliceblue;
        border-radius:20px;        
        align-self:flex-end;
    }
`;

export const CardFlex=styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

    .empty-bucket{
        font-size:5rem;
        font-weight:400;
        color:#ffffff;
        margin-top:5rem;
    }
`;

export const Form=styled.form`
    display:flex;
    flex-direction:column;
    input{
        margin-bottom:1rem;
        padding:4px;
    }
    label{
        font-weight:600;
        margin-bottom:0.2rem;
    }
    button{
        margin-top:0.5rem;
        align-self:end;
        background-color: black;
        border: 0;
        font-weight: 500;
        padding: 7px 12px;
        border-radius: 8px;
        color: aliceblue;
    }
`;