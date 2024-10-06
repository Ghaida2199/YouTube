import React from 'react';

function Advertisement() {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="card bg-base-100 image-full w-11/12 md:w-96 shadow-xl">
        <figure>
          <img
            src="https://expandcart.com/wp-content/uploads/2021/10/%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA-%D9%84%D9%8A%D9%86%D9%83%D8%AF-%D8%A5%D9%86.jpg"
            alt="Shoes"
            className="w-full h-48 object-cover" 
          />
        </figure>
        <div className="card-body">
          <p className="card-title text-lg md:text-xl">
            If you're looking for assistance on a project or interested in collaboration, feel free to reach out!🚀
          </p>
          <h2 className="text-md md:text-lg">
            🔗 Connect with me on LinkedIn to stay updated on my latest projects.
          </h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => window.location.href = 'https://linkedin.com/in/ghaida-aloufi-232918252'}
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
