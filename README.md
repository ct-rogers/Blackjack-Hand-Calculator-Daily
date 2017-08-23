Black Jack Hand Calculator

Create an algorithm that will provide you the results of a Blackjack hand.

Blackjack is a game where players try to get their hand of cards as close to the number 21 as possible without going over 21. The premise is that you want to have a hand value that is closer to 21 than that of the dealer, without going over 21. If the dealer has a hand of 19 and you have a hand of 20, you win! If the dealer has a hand of 19 and you have a hand of 22, you lose! You always start with two cards in Blackjack, but each "round" you can choose to draw a card or hold. Your hand can grow over time.

A Game of Blackjack

The dealer gives me my first two cards, a 3 and King. The 3 is worth 3 points, and the King is worth 10 points. My "hand" is 13 points. During the next round, I can choose to "hold" my 13 and hope to beat the dealer's hand, or I can draw another card. I draw another card and get a 7. Now, now my hand has 3 cards and is worth 20 points (3 + 10 + 7). I choose to stop drawing cards because anything more than a 1 will put me over 21 and I will lose.

Making the Calculator

Taking this into consideration, were you to build a Blackjack game, you would need a function that can take any hand and return the total value of that hand. This function would be used a lot in your game. It should take an array of cards as an argument and return a single number. The number should be the value of the hand.

Let's say our function is called handValue. It would return these values, given these arrays:

<p>handValue( [ "2", "2", "K" ] ) === 14;</p>
<p>handValue( [ "2", "Q" ] ) === 12;</p>
<p>handValue( [ "7", "J" ] ) === 17;</p>
<p>handValue( [ "7", "A" ] ) === 18;</p>
<p>handValue( [ "8", "J", "A" ] ) === 19;</p>
<p>handValue( [ "8", "A", "J" ] ) === 19;</p>
<p>handValue( [ "8", "7", "A", "A" ] ) === 17;</p>
<p>handValue( [ "K", "A" ] ) === 21;</p>

Start with the starter files below, and open index.html file in your browser. Open the JavaScript console. Your screen should look similar to the screenshot below.

<img src="https://camo.githubusercontent.com/2a462f0cd35e5f9253487a6dc760c82d385804f2/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f39336635383832632d626c61636b6a61636b2d74657374732e706e67">

Your goal is to write a function called handValue that takes an array of cards and returns the total value. The interesting part of this is how Blackjack does the scoring. Here are the rules:

Number cards are worth their stated value: 1-10 (1 = 1 point, 4 = 4 points, 9 = 9, etc)
Face Cards are worth 10 points, Jack (J), Queen (Q) and King (K): J, Q, K = Worth 10 points each
The Ace Card is special. It has two possible values, 1 or 11, whichever gets you closer to 21 without going over 21. A = Worth 1 or 11 points. The possible values for cards are: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]
