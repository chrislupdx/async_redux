import defaultImg from '../assetts/bagua-512.png';

const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';

      return json;
    });
};

export const getCharacters = () => {
  return get('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      img: character.photoUrl || defaultImg
    })));
};

export const getCharacter = id => {
  return get(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.photoUrl,
      position: json.position
    }));
}
;
