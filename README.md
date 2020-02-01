# Squid Mountain

By:
[Matthew Malone](https://github.com/matthewdshepherd)
[Quinne Farenwald](https://github.com/qfarenwald)

## Table of Contents
* [Misson](#Mission) 
* [MVP](#MVP)
* [Walkthrough](#Walkthrough)
* [Future Iterations](#Future-Iterations)
* [Features](#Features)
* [Try It Out](#Try-It-Out)
* [API's used](API's-used)
* [Link to Project Management Board](Link-to-Project-Management-Board)

### Mission:  
Help build vocabulary in Elementary and Junior High Students through gameplay by using Latin based English language roots and prefixes. The student/player willplay through 6 rounds (warm-up + 5 game play rounds). At the end of the game the player is shown their stats (time taken to play through the rounds, each round broken down for the time it took, how many they got right in total and per round).

### MVP-2.0 - Full Student Play Through

#### Welcome Screen
- Updated welcome screen with cleaner and more intuitive user experience
- Player is instructed to insert name clearly in correct input field
- Start Game button appears and enables after text is entered into the input field

#### Updated Design
- Design has been updated to have more consistency arcoss game play from player name input through game completion

#### Game Play
- User will match prefixes with roots to create word
- Upon each successfully created word (prefix and root match), a modal appears showing the full word, part of speech along with a sentence containing the word.
- The user will disable modal. The word, part of speech and sentence will appear on the right side of the screen in the successfully completed section.

#### Round: 
- Each round consists of five prefix and word matches
- Once the user completes a round, a modal appears showing a recap of the round and a button to start the next round.

#### End of Game: 
- The user is shown how long it took them to get through each round, along with the total time it took to get through all five rounds.

### Themes
1. Spy (International)
2. Mountain Climbing (Outdoor adventure)
3. Space - import from NASA API

### MVP-1.0:
#### Welcome Screen
- User will type in their name. 
- Once the user name is inputted, the enter button enables.
- New message pops up for player to start game.

#### Warm-Up:
- The user will match prefixes to their meanings.

#### Walkthrough MVP-1.0
<img src='./src/images/Squid_Mountain.gif' alt="Squid Mountain GIF">

### Future Iterations
- User will choose a theme. (have a default theme)

## Features

- [x] Built on React
- [x] React Router
- [x] Fetch
- [x] classnames
- [x] eslint
- [x] Paths making use of forward/back button
- [x] Correct answers flash green
- [x] Correct answers move to the completed section
- [x] Wrong answers flash red

## Try It Out

- [x] Let's build your vocabulary!!
- [X] Type your name in the input field
- [X] Enter welcomes you to the game, once ready hit the pulsating start button
- [X] You're now on the warm up screen where you'll be matching prefixes with their meanings
- [X] Try matching them! You'll notice a hover state and active select state. When you get the correct matches the cards light up green and move over to the completed area. If they aren't correct a quick flash of red will and then deselection of those cards will let you know to try again.

### API's used:
[words api](https://www.wordsapi.com/)
[SENTENCE GENERATING API by linguatools.org](https://linguatools.org/language-apis/sentence-generating-api/)

## Link to Project Management Board
[Link to Project Management Board](https://github.com/users/matthewdshepherd/projects/2)