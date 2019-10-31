export const fetchWord = async (word) => {
    const options = {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'dbc73f3956mshcf26537552ba173p1081edjsn50c9347e0b06',
          'Accept' : 'application/json'
        }
      }

      const response = await fetch(`https://wordsapiv1.p.mashape.com/words/${word}`, options)
      console.log(response)
      if (response.ok === true) {
        const wordData = await response.json()
        console.log(wordData)
        return wordData
      } else {
        throw Error(response.statusText)
      }

}