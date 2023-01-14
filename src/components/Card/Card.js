import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { VideoCard } from './Card.style';
import CloseIcon from '@mui/icons-material/Close';
import VideoIcon from '../../images/video-icon-black.svg';
import axios from 'axios';
import MoveCardDialog from '../MoveCardDialog/MoveCardDialog';

function Card({data,cardData,setCardData}) {
  const [visible,setVisible]=useState(false);
  const [moveCardModal,setMoveCardModal]=useState(false);
  const [newBucketCategory,setNewBucketCategory]=useState("");

  const closeModal=()=>{
      setVisible(false);
  }

  const closeMoveCardModal=()=>{
    setMoveCardModal(false);
  }

  const removeCard=async (e)=>{
    e.preventDefault();
    if(data)
    await axios.delete(`https://test-api-augx.onrender.com/cards/${data.id}`).then((res)=>{
      const tempData=[...cardData];
      const index=tempData.findIndex(i => i.id === data.id);
      if(index !== -1) tempData.splice(index,1); 
      setCardData(tempData);
    });
  };

  const handleClickOnCard=async ()=>{
    setVisible(!visible);
    await axios.patch(`https://test-api-augx.onrender.com/cards/${data.id}`,{
      click:1
    }).then((res)=>{
      const tempData=[...cardData];
      const index=tempData.findIndex(i => i.id === data.id);
      if(index !== -1) tempData[index].count++;
      setCardData(tempData);
    });
    console.log(data);
  }

  const handleMoveCard=async (e)=>{
    e.preventDefault();
    closeMoveCardModal();
    await axios.patch(`https://test-api-augx.onrender.com/cards/${data.id}`,{
      bucketCategory:newBucketCategory
    }).then((res)=>{
      const tempData=[...cardData];
      const index=tempData.findIndex(i => i.id === data.id);
      if(index !== -1) tempData[index].bucketCategory=newBucketCategory;
      setCardData(tempData);
    });
    console.log(data);
  }

  return (
    <div>
      <VideoCard>
        <img src={VideoIcon} alt="logo" className='video-icon' onClick={()=>handleClickOnCard()}></img>
        <div className='title'>{data.title}</div>
        <div className='category'>Bucket Category: {data.bucketCategory}</div>
        <button className='button' onClick={()=>setMoveCardModal(!moveCardModal)}>Move Card</button>
        <button className='button' onClick={(e)=>removeCard(e)}>Remove Card</button>
      </VideoCard>

      {moveCardModal && <MoveCardDialog visible={moveCardModal} closeModal={closeMoveCardModal} setNewBucketCategory={setNewBucketCategory} handleMoveCard={handleMoveCard}/>}

      <Dialog
            fullWidth={true}
            open={visible}
            onClose={closeModal}
            sx={{ fontFamily: "Roboto"}}
        >
          <DialogTitle sx={{fontSize:"1.5rem",fontWeight:"700",textAlign:"center"}}>
            Video Player
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
            <DialogContent sx={{height:"30vh"}}>
                <div className='discard-card'  style={{width:"100%",height:"100%"}}>
                    <iframe style={{width:"100%",height:"100%"}} src={data.video ||null} title="YouTube video" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Card;