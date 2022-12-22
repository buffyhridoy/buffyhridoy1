import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import { publicationData } from '../../../data/publicationData';
import './publication.css';
import SinglePublication from './single-publication/single-publication';

const PublicationUI = ({classes}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {publicationData.length > 0 && (
        <div className="publication" id="publication" style={{ backgroundColor: theme.secondary }}>
          <div className="publication--header">
            <h1 style={{ color: theme.primary }}>Publication</h1>
          </div>
          <div className="publication--body">
            <div className="publication--bodyContainer">
              {publicationData.slice(0, 3).reverse().map(publication => (
                <SinglePublication
                  theme={theme}
                  title={publication.title}
                  desc={publication.description}
                  date={publication.date}
                  image={publication.image}
                  url={publication.url}
                  key={publication.id}
                  id={publication.id}
                />
              ))}
            </div>

            {publicationData.length > 3 && (
              <div className="publication--viewAll">
                <Link to="/publication">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  );
};

export default PublicationUI;