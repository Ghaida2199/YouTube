import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const apiKey = 'AIzaSyBUQ5qwV8uH8ZcYQaVcIURlLnmJOR_Suy8';
    fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&moderationStatus=published&videoId=${id}&key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items);
      });
  }, [id]);

  return (
    <div className='w-full flex mt-2'>
      <ul className='w-full'>
        {comments.map((comment) => (
          <li key={comment.id} className='flex mt-3'>
            <div className='flex flex-col'>
              <img
                src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                className='w-10 h-10 rounded-full mr-2'
                alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
              />
            </div>
            <div className='flex flex-col ml-2 w-full'>
              <p className='text-black font-semibold text-sm md:text-base'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
              <h2 className='text-sm md:text-base'>{comment.snippet.topLevelComment.snippet.textDisplay}</h2>
              <div className='flex justify-start items-center mt-2'>
                <svg className='w-5 h-5 mr-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_121)">
                      <rect width="24" height="24" fill="white"></rect>
                      <path d="M3 12.5C3 11.3954 3.89543 10.5 5 10.5H6C7.10457 10.5 8 11.3954 8 12.5V18.5C8 19.6046 7.10457 20.5 6 20.5H5C3.89543 20.5 3 19.6046 3 18.5V12.5Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M8 12.5C9 12.5 13 10 13 5C13 3 16 3 16 5C16 7 16 8 15 10.5H21C21.5523 10.5 22 10.9477 22 11.5V14.7396C22 15.2294 21.8202 15.7022 21.4948 16.0683L18.5967 19.3287C18.2172 19.7557 17.6731 20 17.1019 20H10.3333C10.117 20 9.90643 19.9298 9.73333 19.8L8 18.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_15_121">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <h2 className='text-sm md:text-base'>{comment.snippet.topLevelComment.snippet.likeCount}</h2>
                <svg className='w-5 h-5 ml-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_129)">
                      <rect width="24" height="24" fill="white"></rect>
                      <path d="M22 11.5C22 12.6046 21.1046 13.5 20 13.5L19 13.5C17.8954 13.5 17 12.6046 17 11.5L17 5.5C17 4.39543 17.8954 3.5 19 3.5L20 3.5C21.1046 3.5 22 4.39543 22 5.5L22 11.5Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M17 11.5C16 11.5 12 14 12 19C12 21 9 21 9 19C9 17 9 16 10 13.5L4 13.5C3.44772 13.5 3 13.0523 3 12.5L3 9.26039C3 8.77056 3.17976 8.29776 3.50518 7.93166L6.40331 4.67126C6.78285 4.24428 7.32686 3.99998 7.89813 3.99998L14.6667 3.99998C14.883 3.99998 15.0936 4.07016 15.2667 4.19998L17 5.49998" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_15_129">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
