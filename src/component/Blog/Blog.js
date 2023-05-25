import { Col, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Blog.css'

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    // console.log(blogBody)
    const { title, blog:blogBody , imageURL, admin, _id } = blog;

    return (
        <div className="blog">
            <Row>
                <Col lg={1}></Col>
                <Col>
                    <div className="blog-image">
                        <img src={imageURL} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="blog-info">
                        <h2>{title}</h2>
                        <span>Posted By {admin}</span>
                        {
                            blogBody.length < 400 ? blogBody.length : <p>{blogBody.slice(0, 400)}<span onClick={()=>navigate(`/blog/id${_id}`)}>Read More</span></p>
                        }
                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </div>
    );
};

export default Blog;