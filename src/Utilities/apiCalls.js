export const fetchWord = async (word) => {
  const options = {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'ENTER API KEY HERE',
      'Accept': 'application/json'
    }
  }

  const response = await fetch(`https://wordsapiv1.p.mashape.com/words/${word}`, options)
  if (response.ok === true) {
    const wordData = await response.json()
    return wordData
  } 
    throw Error(response.statusText)
  

}
