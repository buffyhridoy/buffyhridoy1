import React from 'react';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../../assets/png/placeholder.png';
import './single-publication.css';

function SinglePublication({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className="singlePublication" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.quaternary}}>
                <div className="singlePublication--image" style={{backgroundColor: theme.secondary}}>
                    <img src={image ? image : placeholder} alt={title} />
                </div>
                <div className="singlePublication--body">
                    <p style={{color: theme.primary}}>{date}</p>
                    <h3 style={{color: theme.tertiary}}>{title}</h3>
                    <h6 style={{color: theme.tertiary}}>{desc}</h6>
                </div>
            </a>
        </Fade>
    )
}

export default SinglePublication
