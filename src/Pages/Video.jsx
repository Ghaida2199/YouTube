import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import { useParams } from 'react-router-dom';
import Comments from '../Component/Comments';
import Post from '../Component/Post'
import Advertisement from '../Component/Advertisement'



function Video() {
  const [videoData, setVideoData] = useState(null);  
  const [videos, setVideos] = useState([]); 
  let { id } = useParams(); 

  useEffect(() => {
    const apiKey = 'AIzaSyBUQ5qwV8uH8ZcYQaVcIURlLnmJOR_Suy8';
     fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);  
      });
  }, []);  

  useEffect(() => {
    const apiKey = 'AIzaSyBUQ5qwV8uH8ZcYQaVcIURlLnmJOR_Suy8';
     
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0]);  
        }
      });
  }, [id]);

  return (
<div>
  <Navbar />

  <div className='w-full flex flex-col md:flex-row-reverse max-sm:flex-col-reverse max-md:flex-col-reverse'> 
  
    <ul className='w-full md:w-[30%] mt-8'>  
      <Advertisement />
      {videos.map((video) => (
        <li key={video.id} className='flex mt-3'>
          <img
            className="w-[40%] h-[15vh] rounded-[12px] mr-1 cursor-pointer"
            src={video.snippet.thumbnails.medium.url}
            onClick={() => window.location.href = `/video/${video.id}`}  
          />
          <h2 className='w-[30vh] overflow-hidden text-ellipsis whitespace-nowrap'>{video.snippet.title}</h2> 
        </li>
      ))}
    </ul>

    <div className='rounded-[12px] w-full md:w-[70%] flex flex-col items-center mt-6'>  
      {videoData && (
        <div className='flex flex-col w-full md:w-[95%]'>
          <iframe
            className='rounded-[12px] w-full h-[50vh] md:h-[75vh]'  
            src={`https://www.youtube.com/embed/${id}`}
            title={videoData.snippet.title}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <h2 className='mt-4 font-bold text-lg md:text-xl text-left w-full'>{videoData.snippet.title}</h2>
          <h2 className='mt-4 text-sm md:text-base text-left w-full bg-[#f2f2f2] overflow-hidden'>{videoData.snippet.description}</h2>
          <h2 className='mt-4 font-bold text-lg md:text-xl text-left'>{videoData.statistics.commentCount} Comments</h2>
          <Post />
          <Comments />
        </div>
      )}
    </div>

  </div>
</div>

  );
}

export default Video;
