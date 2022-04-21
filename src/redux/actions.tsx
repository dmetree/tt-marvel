import axios from 'axios'
import {Ihero} from '../types/types'

export const PLUS = 'PLUS'
export const MINUS = 'MINUS'
export const GET_HEROES = 'GET_HEROES'
export const INIT_HERO_ID = 'INIT_HERO_ID'
export const GET_HERO_INFO = 'GET_HERO_INFO'
export const REFRESH_HERO_INFO = 'REFRESH_HERO_INFO'


const hash = 'e53797aa938146099a0100a0b37019b8'
// Your public key 
const API_KEY_1 = '49fe5bdd78c9516ff50cdfef6da0e819'
// Your private key 
const API_KEY_2 = 'a209c5479efea8b93fca12fe81f329e618540e6c'
const url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey='+ API_KEY_1 + '&hash=' + hash;
const h_url = 'https://gateway.marvel.com:443/v1/public/characters?limit=20&apikey=' + API_KEY_1;

const base_url = 'https://gateway.marvel.com:443/v1/public/characters/';
const api_key = '?apikey=' + API_KEY_1;


export const getHeroes = (heroes: any) => {
  return {
    type: GET_HEROES,
    heroes: heroes,
  }
}

export const initHeroes = (offset: string) => {
  const url_offset = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=' + offset + '&apikey=' + API_KEY_1;

  
  return (dispatch: (arg0: { type: string; heroes: any }) => void) => {
    axios.get(url_offset)
      .then(response => {
        dispatch(getHeroes(response.data.data))
      })
      .catch(error => console.log(error.message))
  }
}

export const getHeroInfo = (hero_info: any) => {
  return {
    type: GET_HERO_INFO,
    hero_info: hero_info,
  }
}

export const initHeroInfo = (id: any) => {
  let HERO_ID = id;
  return (dispatch: (arg0: { type: string; hero_info: any }) => void) => {
    
    axios.get(base_url + HERO_ID + api_key)
      .then(response => {
        dispatch(getHeroInfo(response.data.data.results))
      })
      .catch(error => console.log(error.message))
  }
}

export const initHeroId = (hero_id: any) => {
  return {
    type: INIT_HERO_ID,
    hero_id: hero_id,
  }
}

export const refreshHeroInfo = () => {
  return {
    type: REFRESH_HERO_INFO,
    hero_info: null,
  }
}



