import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions/charactersActions';
import {
  getCharacters,
  getCharactersLoading,
  getCharactersError
} from '../../selectors/charactersSelectors';
import Characters from '../../components/characters/Characters';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading, error } = this.props;
    if(loading) return <h1>fine</h1>;
    return <Characters characters={characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
