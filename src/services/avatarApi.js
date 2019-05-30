import defaultImg from '../assetts/bagua-512.png';

export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      img: character.photoUrl || defaultImg
    })));
}
;
