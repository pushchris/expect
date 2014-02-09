# Expect

Declare expected entries in a JSON object. Useful for validating a JSON object by providing an array necessary paths.


## Installation

	npm install expect-in

## Example

    var expect = require('expect-in');
    
    var json = {
      "name": {
        "first": "John",
        "middle": "Jacob",
        "last": "Smith"
      },
      "username": "johnsmith"
    };
    
It can be called either asynchronously:
    
    expect([
      "name.first",
      "name.last",
      "email"
    ], json, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
    
Or synchronously:

    if (expect([
      "name.first",
      "name.last",
      "username"
    ], json)) {
      console.log("true");
    } else {
      console.log("false");
    }
