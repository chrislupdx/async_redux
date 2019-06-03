import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../../components/characters/Character';
import { connect } from 'react-redux';

class CharacterById extends PureComponent {
  static propTypes = {
    character: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    }),
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    // console.log('hi');
    const { character, loading } = this.props;

    if(loading) return <h1> Loading </h1>;

    return <CharacterById;
  }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharacterLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterById)
;

// export default CharacterById
;
