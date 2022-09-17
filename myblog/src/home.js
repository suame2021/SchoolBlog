
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsComponent from './postsComponent';
import loader from './logo.svg';
import AlertComponent from './AlertComponent';
import CarouselComponent from './carouselComponent';

// import { useState, useEffect } from 'react';
import useFetch from './useFetch';
// import { useContext } from 'react';


const HomeComponent = () => {
    const { data: posts, isPending, error } = useFetch('')
    







    return (
        <div>
            < CarouselComponent />
            {error && <AlertComponent props={error} />}
            
            {isPending && <div><img src={loader} width="200" alt='preloader' /></div>}
            {posts && < PostsComponent posts={posts} />}

        </div>
    );
}

export default HomeComponent;