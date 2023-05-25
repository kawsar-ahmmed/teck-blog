import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../App';
import Blog from '../Blog/Blog';
import { Container } from 'react-bootstrap';


const Home = () => {
    const [blogs, setBlogs] = useContext(BlogContext);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [setBlogs]);



    return (
        <Container>
            {
                blogs.map((blog)  => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </Container>
    );
};

export default Home;
