import { Link } from 'react-router-dom';
import img_blog from '../images/blog-1.jpg'
function BlogCard() {
    return (
        <>
            <div className="blog-card">
                <div className="card-image">
                    <img src={img_blog} className='img-fluid w-100' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>11 JUNE, 2022</p>
                    <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                    <p className='desc'>
                        you're Only As Your Last Collection, Which is
                        An Enormous Pressure. I Think There is Something About...</p>
                    <Link to="/blog/:id" className='button'>Read More</Link>
                </div>
            </div>
        </>
    )
}
export default BlogCard;