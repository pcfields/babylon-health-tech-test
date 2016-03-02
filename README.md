# Babylon Website using AngularJS
___

## Setup
> You can setup the project	by navigating to the folder using the terminal/command and typing npm install

```js
 npm install
```

Once that is successful type grunt in the command line
```js
 grunt
 
```

This will run a webserver which would allow you to access the site at [http://localhost:9001](http://localhost:9001)


To run tests type karma start in the command line
```js
 karma start
 
```

## Notes

A few things were not completed
- menu is not highlighted when selected
- no tests for routing
- no protractor tests
- a dataService/factory would be ideal for getting data from the server but in the interest of time i have mocked the data in the controller with some comments