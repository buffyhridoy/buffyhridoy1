import { Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { headerData } from '../../../data/headerData';
import SinglePublication from '../publication/single-publication/single-publication';
import './publication.css';

const PublicationPageUI = ({ theme, classes, filteredArticles, setSearch, search }) => {
  return (
    <div className="publicationPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Publication</title>
      </Helmet>
      <div className="publicationPage--header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Publications</h1>
      </div>
      <div className="publicationPage--container">
        <div className="publication--search">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach publication..." className={classes.search} />
        </div>
        <div className="publications--container">
          <Grid className="publication-grid" container direction="row" alignItems="center" justifyContent="center">
            {filteredArticles.reverse().map(publication => (
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
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PublicationPageUI;