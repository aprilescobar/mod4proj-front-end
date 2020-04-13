import React from 'react';
import Image from 'react-bootstrap/Image'

const Home = () => {
    return (
        <div>
            <h3>Hi there!</h3>
            {/* <div className="homeImg"> */}
                <Image className="homeImg" src="https://media.giphy.com/media/xT8qBe6CcgWfVfHQZO/source.gif" alt="poop." fluid/>
            {/* </div> */}
        </div>
    )
}

export default Home