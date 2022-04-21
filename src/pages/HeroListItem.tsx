import React, {FC} from 'react'
import './HeroListItem.scss'

interface HeroListItemProps {
  name?: string;
  img_path?: string;
  img_extension?: string;
  clicked: () => void;
}

const HeroListItem: FC<HeroListItemProps> = ({name, img_path, img_extension, clicked }) => {
  
  const img_url = img_path + '.' + img_extension; 

  return (
    <div className="general">
      <img src={img_url} alt="Hero img" className="general__img"/>
      <h2 className="general__name">{name}</h2>
      <button type="button" onClick={clicked} className="general__button">Details</button>
    </div>
  )
}

export default HeroListItem