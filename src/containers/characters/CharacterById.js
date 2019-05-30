import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
      const { character, loading } = this.props;

      if(loading) return <h1> Loading </h1>;

      return <CharacterDetail character={character} />;
    }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharactersLoading
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterById)
;
