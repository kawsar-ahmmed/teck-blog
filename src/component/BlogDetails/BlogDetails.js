import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../App';
import { Col, Container, Row } from 'react-bootstrap';
import './BlogDetails.css'

// video 1:40 menu hide
const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blogs] = useContext(BlogContext);

    const blog = blogs.find(blog => blogs._id === blog.id);
    console.log(blog)
    const { title, blog: blogBody, imageURL } = blog;
    // console.log(blogs)

    return (
        <Container className='text-center'>
            <Row>
                <div className='back-button'>
                    <button onClick={() => { navigate(-1) }}>Back</button>
                </div>
                <Col>
                    <div className="details-img">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="details-info">
                        <h2>{title}</h2>
                        <p>{blogBody}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogDetails;