# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Created a design with AdobeXd to be as similar as possible to the design images.
Arrange the html elements into containers to represent the structure necessary.

Then I use bootstrap for some quick prototyping. Using the cdn.

But went back to sass for the styling. Styled the mobile screens.

Then added some javascript to select a rating and also to submit by 
hiding the rating box and showing the thanks box.

### Built with


### What I learned

```js
// Highlight only one choice at a time
ratings.forEach(btn => {
	btn.onclick = () => {
		ratings.forEach(item => {
			if (item.dataset.rank === btn.dataset.rank) {
				item.classList.add('chosen')
			}else {
				item.classList.remove('chosen')
			}
		})
		rating = btn.dataset.rank
	}
})

// Add and remove the hidden class to show the correct screen
const showResult = () => {
	rateBox.classList.add('hidden');
	thankBox.classList.remove('hidden');
	result.innerHTML = `You selected ${rating} out of 5`
}

// Only allow the onclick if a value for rating was set
submitBtn.onclick = () => {
	if (rating) {
		showResult()
	}
}
```

### Continued development


### Useful resources


## Author

- Website - [Nathaniel Adiah](https://nathanieladiah.github.io)
- Frontend Mentor - [@nathanieladiah](https://www.frontendmentor.io/profile/nathanieladiah)


## Acknowledgments
