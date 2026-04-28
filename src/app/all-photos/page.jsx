import PhotoCard from '@/Components/PhotoCard';
import React from 'react';

const AllPhotosPage =async () => {

    const res = await fetch("https://pixgen-chi.vercel.app/data.json");
    const photos = await res.json();
    return (
        <div className='w-[90%] mx-auto'>


            <h1 className='text-4xl font-bold text-center mt-20'>All Photos</h1>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
            
        </div>
    );
};

export default AllPhotosPage;