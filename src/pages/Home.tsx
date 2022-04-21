import React, {FC, useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../redux/actions'
import HeroListItem from './HeroListItem'
import './HomePage.scss'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

interface HomeProps {
  heroes?: any;
  offset?: number;
  onInitHeroes: any;
  onHeroIdClick: any;
  onInitHeroInfo: any;
  onRefreshHeroInfo: any;
}



const Home: FC<HomeProps> = ({ heroes, offset, onInitHeroes, onHeroIdClick, onInitHeroInfo, onRefreshHeroInfo }) => {
  gsap.registerPlugin(ScrollTrigger);

  const navigate = useNavigate();

  const heroClickHandler = (id: any) => {
    onRefreshHeroInfo()
    navigate(`item/${id}`)
    onHeroIdClick(id)
    onInitHeroInfo(id)
  }


  useEffect(() => {
    onInitHeroes(offset)
  }, [])


  // Call load more heroes at the end of the screen
  ScrollTrigger.create({
    trigger: ".loadmore",
    onEnter: self => {
      onInitHeroes(offset)
    }
  });


  let herolist = <div>Loading...</div>
      
  if (heroes){
    // Remove duplicates
    let pureheroes = heroes.filter((v: { id: any },i: any,a: any[])=>a.findIndex((v2: { id: any })=>(v2.id===v.id))===i)

    herolist = pureheroes.map((hero: { id: React.Key | null | undefined; name: string | undefined; thumbnail: { path: string | undefined; extension: string | undefined } }) => {
      return <HeroListItem
        key={hero.id}
        name={hero.name}
        img_path={hero.thumbnail.path}
        img_extension={hero.thumbnail.extension}
        clicked={() => heroClickHandler(hero.id)}/>
    });
  }
  
  

  return (
    <div className="container">
      <h1 className="title">Marvelous Home</h1>
      <div className="wrapper">
        {herolist}
      </div>
      <div className='loadmore'>load more</div>
    </div>
  )
}



const mapStateToProps = (state: { heroes: {}; offset: number }) => {
  return {
    heroes: state.heroes,
    offset: state.offset,
  };
}

const mapDispatchToProps = () => (dispatch: any) => {
  return {
    onInitHeroes: (offset: any) => dispatch(actionTypes.initHeroes(offset)),
    onHeroIdClick: (id: any) => dispatch({type: actionTypes.INIT_HERO_ID, hero_id: id}),
    onInitHeroInfo: (id: any) => dispatch(actionTypes.initHeroInfo(id)),
    onRefreshHeroInfo: () => dispatch(actionTypes.refreshHeroInfo()) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)