import React, {Component} from 'react';
import Header from './components/Header';
import Generator from './components/Generator';

class App extends Component {
	constructor() {
		super();
		this.state = {
			adjs: ["green", "vegan", "happy"],
			nouns: [],
			nickAdj: "",
			nickNoun: "",
		}
	}

	generate = () => {
		let nouns = this.state.nouns;
		let adjs = this.state.adjs;

		let noun = nouns[Math.floor(Math.random() * nouns.length)];
		let adj = adjs[Math.floor(Math.random() * adjs.length)];
		
		let nounUp = uppercaseFirstChar(noun);
		let adjUp = uppercaseFirstChar(adj);

		this.setState({
			nickAdj: adjUp,
			nickNoun: nounUp
		});		
	}

	componentDidMount() {
		fetch("https://raw.githubusercontent.com/baliw/words/master/adjectives.json")
		.then(response => response.json())
		.then(data => {
			this.setState({
				adjs: data
			});
		});

		fetch("https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json")
		.then(response => response.json())
		.then(data => {
			this.setState({
				nouns: data
			});
		});
	}

  render() {
		return(
			<div>
			  <Header />
			  <Generator 
			    generate={this.generate}
			    nickAdj={this.state.nickAdj}
			    nickNoun={this.state.nickNoun}
			  />
			</div>
		);
	}
}

function uppercaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default App;