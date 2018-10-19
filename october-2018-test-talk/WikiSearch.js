// WikiSearch.js - wikipedia search component

import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { take } from 'lodash';

import fetch from 'isomorphic-fetch';

import theme from './theme';

const LargeInput = styled.input`
  font-size: 1.5em;
  padding: 2px;
  width: 400px;
  margin-right: 20px;
  margin-bottom: 10px;
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

export default class WikiSearch extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      results: null,
    }
    this.search = this.search.bind(this);
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
    return <Container>
      <div>
        <form onSubmit={this.search}>
          <LargeInput innerRef={this.inputRef} type="text" placeholder="Enter search..." />
          <LargeButton type="submit">Search Wikipedia</LargeButton>
        </form>
      </div>
      <div style={{flex: '1'}}>
        {this.state.results &&
          this.state.results.map((r, i) =>
            <p key={r.title}>
              <a href={`https://en.wikipedia.org/wiki/${r.title}`}>
                {r.title}
              </a>
            </p>)
        }
      </div>
    </Container>
  }
}
