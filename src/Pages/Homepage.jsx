import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

function Homepage() {
  const [videos, setVideos] = useState([]); // لتخزين قائمة الفيديوهات

  useEffect(() => {
    const apiKey = 'AIzaSyBUQ5qwV8uH8ZcYQaVcIURlLnmJOR_Suy8';

    // جلب قائمة الفيديوهات الأكثر شيوعًا من YouTube API
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setVideos(data.items || []); // حفظ قائمة الفيديوهات
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
   
  }, []); // تأكد من إضافة [] هنا حتى يتم تنفيذ هذا التأثير مرة واحدة عند تحميل المكون

  return (
<div>
  <Navbar />
  <div className='w-full'>
    <ul className='flex flex-wrap justify-center'>
      {videos.map((video) => (
        <li key={video.id} className='flex flex-col mt-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'> {/* تغيير الأبعاد حسب حجم الشاشة */}
          {/* استخدم Link لتوجيه المستخدم إلى صفحة الفيديو المحدد */}
          <Link to={`/Video/${video.id}`}>
            <img
              className="w-full h-auto rounded-[12px] cursor-pointer" // استخدام w-full و h-auto لضمان ملاءمة الصورة
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title} // إضافة نص بديل للصورة
            />
          </Link>
          <h2 className='mt-2 text-center text-sm md:text-base'>{video.snippet.title}</h2> {/* إضافة تباعد بين الصورة والعنوان وتوسيع العنوان */}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
}

export default Homepage;
