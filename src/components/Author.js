import React from 'react';
import '../styles/Author.css';
import { Button } from '@material-ui/core';

function Author() {
    return (
        <div className='author'>
            <p>Made by Bek Roz with ❤️</p>
            <br />
            {/* <Link to="https://github.com/bekrozikoff"> */}
                <Button  variant='outlined' className="author__button" ><a className="author__link" href="https://github.com/bekrozikoff"> 👉 HIRE NOW 👈</a></Button>
            {/* </Link> */}
            <br />
            <a href="https://www.bekroz.com">www.bekroz.com</a>
            <br />
            <p>© 2021 Covido-Radar |  MIT License</p>
        </div>
    )
}

export default Author;