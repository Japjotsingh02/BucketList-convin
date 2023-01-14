import React from 'react';
import { HistoryCard } from './History.style';
import VideoIcon from '../../images/video-icon-black.svg';


function History({data}) {
    return (
        <>
            {data && data.filter((d)=>d.click>=1)
            .map((d)=>{
                return(
                    <HistoryCard>
                        <img src={VideoIcon} alt="logo" className='video-icon'></img>
                        <div className='title'>TItle: {d.title}</div>
                        <div className='category'>Bucket Category: {d.bucketCategory}</div>
                        <div className='category'>Video URL: {d.video}</div>
                    </HistoryCard>
                )
            })}
        </>
    );
}

export default History;