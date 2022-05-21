# My random dog Project:
On this page , let's have fun with different dog breeds. Some of you might be dog lovers, would you like to have Dog team? Please name your dog and show'em some love!
## My page's features:
### Get random Dog:
1. Fetch free dog API by using this URL: https://dog.ceo/api/breeds/image/random
2. Build function `mydog`:
In the function body you will create an element `img` for your dog's picture and set `Attribute: src, class, width, height` then `append` into the DOM
3. Use function `mydog` for the second `.then` .

### Name your Dog (use `submit` event )
In this part you will need to persist dog data in a `json` file, build your Dog Card, then display your dog's data from the `json` file, here are the steps:
1. Build function ```handlesubmit``` take ```e``` as argument, this function has:
- `e.preventDefault()`
- form reset.
- Dog Object with keys: `name, imgURL, myLike`.
- Send POST request to persist data in `json` file.
- Call function `getDog()` from step 3.
- Reset the liker.
2. Build function `renderOnedog(myDog)`:
- Create an Element called `li` and asign it as a card
- Set Attribute `class` and `innerHTML` for this Element:
- This `inner HTML` should contain: `myDog.imgURL` , `myDog.name` , `myDog.myLike` which are links to the Dog Object in step 1.
- Append this card to the DOM.
3. Build function `getDog()`:
 In this function we will have a GET request to get data from `json` files. In the seccond `.then`, call the function `renderOnedog` to display the last dog from the data.
 4. Finally we need to add a 'submit` event listener to our form, call the function ```handlesubmit```.

 ### Display all your favorite dogs:
- Use GET request to get data from `json` file .
- Display your cards by calling function `renderOnedog(myDog)`
### Next button to get another Dog:
- In this part we will have a `click` event for the button.
- Simply make another GET request,the same as when you get a random dog in the previous step.

### Heading h1 interaction
In this feature you will have another event `mouseover` for element `h1`. It changes the color for this line with any color you prefer.

### Liker for your favorite Dog:
 - Build a function call `likeCallback(e)`: this function fills the heart when you like the dog, and empties the heart when you dislike.
 - Add `click` event to the `like` heart then call function `likeCallback(e)`.



