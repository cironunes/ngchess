## ngchess

### Sample AngularJS Chess game using Yeoman stack.

This app was built for fun.

# Installation

```sh
git clone git://github.com/cironunes/ngchess.git
cd ngchess
npm install && bower install

grunt serve
```

```grunt serve``` will open the browser pointing to ```http://localhost:9000/```

# Idea

The main idea is use the power of Angular's data-binding to keep the UI synchronized with the data, directives to manipulate the DOM and a simple Pub/Sub to update the $scope only once. The chessboard is just an object with rows and cols, and pieces are strings following the FEN notation.
