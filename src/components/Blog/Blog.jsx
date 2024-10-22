import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='mb-6' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 mb-6'>
                    <img className='w-16' src={author_img} alt={`image of ${author}`} />
                    <div>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} time read</span>
                </div>
            </div>
            <h2 className='text-4xl  mb-6'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index)=> <span key={index}><a className='mr-2 text-gray-600' href="">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}