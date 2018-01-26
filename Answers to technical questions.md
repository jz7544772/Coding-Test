
### Question 1
I spent about 8 hours working on the coding test.   
In addition to completing the story's acceptance criteria, I added a few things to provide a more intuitive user experience.  
- to disable the submit button, if the outcode input is empty, or waiting for API response
- to change submit button text while waiting for API response
- to show messages indicating API response error, or no results found

### Question 2
One of the most useful features what was added to Javascript (ES6) is the lambda expression.
The lambda expression is usually used in place of callback functions.
The benefit is to give developers a consistent understanding of the 'this' keyword in Javascript.

Code Example:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  },
  
  setNameAfterSeconds(name, seconds) {
    const self = this; 
    setTimeout(function() {
      // we have to use the cached object reference - self
      // because the callback function is going to be invoked by the Javascript's root object (window - if in browser)
      self.name = name;  
    }, seconds * 1000);
  },
  
  setNameAfterSecondsLambda(name, seconda) {
    setTimeout(() => {
      this.name = name;
    }, seconds * 1000);
  }
}
```

### Question 3
To analyze the frontend performace, we can use the Timeline feature in Chrome's Developer Chrome.
My experience in this area is limited, but this is definitely a topic I would like to dive deeper soon.

### Question 4
It is difficulty for any person to view hundreds of items all at once.
Of couse pagenation can be done in the frontend. 

I think it would be better to have a default limit for number of restaurants in the API response.
And to add a meta field to the API response to indicate there will be more items to come.
This could help improve the overall web app performance, since the backend has the option to cache responses.

### Question 5
```javascript
{
  name: "Jason Guo", 
  profession: "Web Developer",
  tags: ["self-starter", "quick-learner", "open-to-ideas"],
  isSeekingOpportnities: true
}
```
