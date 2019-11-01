import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchWord} from './Utilities/apiCalls'
import gameData from './gameData/gameData'
import { wordFetchCleaner } from './Utilities/helpers'

export default class App extends React.Component {
  constructor() {
    super ();
  }
  
  componentDidMount = async () => {
    
      const fetchEachWord =  async () => {
        const variable = gameData.map ( async (prefix) => {
          const fetchedWordBank = prefix.wordBank.map( async (word) => wordFetchCleaner(prefix.prefix, await fetchThisWord(word)))
          return Promise.all(fetchedWordBank)
        })
       return Promise.all(variable)
      }

    const fetchThisWord = async (word) => {
      try {
        const getWord = await fetchWord(word)
        console.log('getWord', getWord)
        return getWord
      } catch {
        console.log('error')
      }

    }
    // console.log( await fetchEachWord())
  };



  render() {
    return (
      <div>
        <h1>Squid Mountain</h1>
      </div>
    )
  }

}