// WikiSearch.js - wikipedia search component

import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { take } from 'lodash';
import { withDeck, updaters } from 'mdx-deck';
import 'isomorphic-fetch';

import theme from './theme';

const LargeInput = styled.input`
  font-size: 1.5em;
  padding: 2px;
  width: 400px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const LargeInputHighlighted = styled.input`
  font-size: 1.5em;
  padding: 2px;
  width: 400px;
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: cornflowerblue;
  color: white;

`;

const LargeButton = styled.button`
  font-size: 1.5em;
  padding: 2px;
  width: 400px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 1rem;
  height: 600px;
  color: #000;
`

const ResultP = styled.div`
  background-color: #95ed64;
  color: white;

`

export class WikiSearch extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    const { update, index } = props.deck;
    this.state = {
      results: [{"title":"George Washington"},{"title":"George Washington Carver"},{"title":"George Washington Bridge"},{"title":"George Washington University"},{"title":"George, Washington"}],
    }
    console.log(index);
    console.log(props);
    update(updaters.setSteps(index, 2));
    this.search = this.search.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return nextProps.deck.active;
  }

  search(e) { 
    e.preventDefault();
    const searchText = this.inputRef.current.value.replace(' ', '+');


    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=meaning&srsearch=${searchText}&format=json&origin=*`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          results: take(json.query.search, 5).map(r => ({title: r.title}))
        });
      })
  }

  render() {
    const { step } = this.props.slide;
    return <Container>
      <div>
        <form onSubmit={this.search}>
          {step <= 0 &&
            <LargeInput innerRef={this.inputRef} type="text" placeholder="Enter search..." />}
          {step >= 1 &&
            <LargeInputHighlighted innerRef={this.inputRef} type="text" readOnly value="George Washington" />}
          <LargeButton type="submit">Search Wikipedia</LargeButton>
        </form>
      </div>
      <div style={{flex: '1'}}>
        {step === 2 &&
          this.state.results.map((r, i) =>
            <ResultP key={r.title}>
              <a href={`https://en.wikipedia.org/wiki/${r.title}`}>
                {r.title}
              </a>
            </ResultP>)
        }
      </div>
    </Container>
  }
}

export default withDeck(WikiSearch);