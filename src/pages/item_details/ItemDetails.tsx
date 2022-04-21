import React, {FC, useEffect} from 'react'
import {Ihero} from '../../types/types'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './ItemDetails.scss'

interface ItemDetailsProps {
  hero_info?: Ihero | null;
  children?: React.ReactChild | React.ReactNode
}


const ItemDetails: FC<ItemDetailsProps> = ({ hero_info }) => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/`)
  }

  let heroInfo;
  heroInfo = <div>Loading...</div>

  if (hero_info){
    let path = hero_info?.thumbnail?.path;
    let extension = hero_info?.thumbnail?.extension;
    let img_url = path + '.' + extension;

    let comicsList = hero_info?.comics?.items.map(comic => {
      return<ul className="list" key={comic.resourceURI}>
        <li className="item">{comic.name}</li>
      </ul>
    });
  
    let storiesList = hero_info?.stories?.items.map(story => {
      return<ul className="list" key={story.resourceURI}>
        <li className="item">{story.name}</li>
      </ul>
    });
  
    let eventsList = hero_info?.events?.items.map(event => {
      return<ul className="list" key={event.resourceURI}>
        <li className="item">{event.name}</li>
      </ul>
    });
  
    let seriesList = hero_info?.series?.items.map(seria => {
      return<ul className="list" key={seria.resourceURI}>
        <li className="item">{seria.name}</li>
      </ul>
    });

    


    heroInfo = <div className="container">
    <h2 className="title">Secret info</h2>

    <div className="hero">
      <img src={img_url} alt="Hero img" className="hero__img"/>
      <div className="hero__title">Here's the file on {hero_info.name}</div> 
      <div className="hero__desc">{hero_info.description}</div>
      <button type="button" onClick={goBack} className="general__button">Go Back</button>
    </div>

    <div className="wrapper">

      <div className="comics">
        <h2 className="general__name">Comics: {hero_info && hero_info?.comics?.available}</h2>
        {comicsList}
        
      </div>

      <div className="stories">
        <h2 className="general__name">Stories: {hero_info && hero_info?.stories?.available}</h2>
        {storiesList}
      </div>

      <div className="events">
        <h2 className="general__name">Events: {hero_info && hero_info?.events?.available}</h2>
        {eventsList}
      </div>

      <div className="series">
        <h2 className="general__name">Series: {hero_info && hero_info?.series?.available}</h2>
        {seriesList}

      </div>
    </div>
  </div>
  }



  return (
    <div>
      {heroInfo}
    </div>
  )
}

const mapStateToProps = () => (state: any) => {
  return {
    hero_info: state.hero_info[0],
  };
}

export default connect(mapStateToProps)(ItemDetails)