import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { CardFlex, Form, Title } from './CardContainer.style';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function CardContainer({cardData,setCardData}) {
    const [openAddModal,setOpenAddModal]=useState(false);
    const [newCardData,setNewCardData]=useState(null);
    // let map=new Map();

    const closeModal=()=>{
        setOpenAddModal(false);
    }

    const AddNewCard=()=>{
        setOpenAddModal(true);
    };

    const handleSubmit=(e)=>{
        // map.set(newCardData.bucketCategory,1);
        e.preventDefault();
        const tempData=[...cardData];
        const param = {...newCardData,id: tempData.length ? tempData.length + 1 : 1,click:0};
        setNewCardData(param);
        tempData.push(param);
        setCardData(tempData);
        axios.post("https://test-api-augx.onrender.com/cards",param);
        closeModal();
    };

    return (
        <>
            <Title className='title'>
                <span className='bucket'>Bucket List</span>
                <span className='addCard' onClick={()=>{AddNewCard()}}>Add New Card</span>
            </Title>
            <CardFlex>
                {cardData && cardData.length>0 ? cardData.map((data)=>(
                    <Card data={data} key={data.id} cardData={cardData} setCardData={setCardData}></Card>
                )) : <div className='empty-bucket'>Bucket is Empty</div>}
            </CardFlex>

            <Dialog
            open={openAddModal}
            onClose={closeModal}
            sx={{ fontFamily: "Roboto"}}
        >
          <DialogTitle sx={{fontSize:"1.5rem",fontWeight:"700",textAlign:"center"}}>
            Add New Card
            {closeModal ? (
              <IconButton
                aria-label="close"
                onClick={closeModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon/>
              </IconButton>
            ) : null}
          </DialogTitle>
            <DialogContent sx={{width:"20rem"}}>
                    <Form>
                        <label>Title:</label>
                        <input type="text" onChange={(e)=>{
                            setNewCardData({...newCardData,title:e.target.value})
                        }}/>
                        <label>Category:</label>
                        {/* <select>
                            
                        </select> */}
                        <input type="text" onChange={(e)=>{
                            setNewCardData({...newCardData,bucketCategory:e.target.value})
                        }}></input>
                        <label>Video:</label>
                        <input type="url" onChange={(e)=>{
                            setNewCardData({...newCardData,video:e.target.value})
                        }}></input>
                        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </Form>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default CardContainer;