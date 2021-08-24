import React from 'react';
import { PostMasonry } from '../components/common';
import trending from '../assets/mocks/trending';

function Home() {
    return (
        <section className="home container"> 
            <div className="row">
                <h1>Trending Posts</h1>
                <PostMasonry posts={ trending } columns={ 3 }/>
            </div>
        </section>
    )
}

export default Home;