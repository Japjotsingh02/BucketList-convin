import { DialogTitle } from '@mui/material';
import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MoveCardDialog({visible,closeModal,setNewBucketCategory,handleMoveCard}) {
    return (
        <>
            <Dialog
            open={visible}
            onClose={closeModal}
            sx={{ fontFamily: "Roboto"}}
            // PaperProps={getPaperParams()}
        >
          <DialogTitle sx={{fontSize:"1.5rem",fontWeight:"700",textAlign:"center"}}>
            Update Bucket Category
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
                <form>
                    <label>Category:</label>
                    <input type="text" onChange={(e)=>{
                        setNewBucketCategory(e.target.value)
                    }}></input>
                    <button onClick={(e)=>handleMoveCard(e)}>Submit</button>
                </form>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default MoveCardDialog;