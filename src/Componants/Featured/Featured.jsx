import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React from 'react';
import "./Featured.scss";

const Featured = ({type}) => {
    return (<div className='featured'>
        {type &&(
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>

                </select>
            </div>
        )}
            <img src='https://wallpapercave.com/wp/wp7631100.jpg' alt="Featured pic" />


    <div className="info">
        <img src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1' alt='another pic'/>

        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab veritatis iusto obcaecati doloribus quibusdam placeat ea quidem, quae et ut laudantium autem laboriosam doloremque, fugiat, modi blanditiis repudiandae consequatur!

        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="moreInfo">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
    </div>
    </div>);
}


export default Featured;