# My random dog Project:
In this page , lets have fun with different Dogs breeds. Some of you might be Dog lover , do you want to have Dog team . Try to name your Dog and show your emotion with them. 
## My page's feature:
### Get random Dog:
1. Fetch free Dog API by using this URL: https://dog.ceo/api/breeds/image/random
2. Build function `mydog`:
In the function body you will  create an element `img` for Dog picture and set `Attribute: src, class, width, height` then `append` into the DOM
3. Use function `mydog` for the second `.then` .

### Name your Dog by submit form (`submit` event )
In this part you will need to persist Dog data in `json` file , build your Dog Card, then display Dog data from `json` file, lets see the following steps:
1. Build function ```handlesubmit``` take ```e``` as argument, this function has:
- `e.preventDefault()`
- form reset.
- Dog Object with the key are: `name, imgURL, myLike`.
- Send POST request to persist data in `json` file.
- Call function `getDog()` from step 3 .
- Reset the liker.
2. Build function `renderOnedog(myDog)`:
- Create an Element call `li`.
- Set Attribute `class` and `innerHTML` for this Element:
- This `inner HTML` should contain: `myDog.imgURL` , `myDog.name` , `myDog.myLike` what are link to the Dog Object in step 1.
- Append this card in to the DOM.
3. Build function `getDog()`:
 In this function we will have GET request to get data form `json` file, in seccond `.then`, call the function `renderOnedog` to display the last Dog from data.
 4. Finally we need to add 'submit` event listenner to our form, call the function ```handlesubmit```.

 ### Display all your favorite Dog:
- Use GET request to get data from `json` file .
- Display your cards by calling function `renderOnedog(myDog)`
### Have next button to get another Dog:
- In this part we will have `click` event for the button.
- Simply make another GET request same as when you get random Dog in the previous step.

### Heading h1 interaction
In this feature you will have another event `mouseover` for element `h1`, lets change the color for this line with any color you prefer.

### Have liker for your favorite Dog:
 - Build a function call `likeCallback(e)`: this function makes a heart full when you like the dog , empty heart when you dislike.
 - Add `click` event to the `like` heart then call function `likeCallback(e)`.



# phase1-project
