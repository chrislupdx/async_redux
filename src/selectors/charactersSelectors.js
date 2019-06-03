export const getCharactersState = state => state.characters;
export const getCharacters = state => getCharactersState(state).list;
export const getCharactersLoading = state => getCharactersState(state).loading;
export const getCharactersError = state => getCharactersState(state).error;
