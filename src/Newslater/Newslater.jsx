import './Newslater.css'

const Newslater = () => {
    return (
        <div className='newslater-container'>
            <h2 className='newslater-title'>Subscribe to our Newsletter</h2>
            <p className='newslater-sub-title'>Get the latest updates and news right in your inbox!</p>
            <div>
                <input className='newslater-field' placeholder="Enter Your Email" type="email" name="" id="" />
                <button className='btn news-btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newslater;