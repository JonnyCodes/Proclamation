# Proclamation!

I wanted to play around and learn how signals worked, so I decided to write my own.

```javascript
let herald = new Proclamation.Herald();

herald.hark(listener, this);
herald.hark(onceTest, this, true);

herald.proclaim();
herald.proclaim();

herald.unhand(listener, this);
herald.proclaim();

function listener() {
    console.log("*GASP* Doth mine ears deceive me?")
}

function onceTest() {
    console.log("Be gone, For I have had enough of your foolishness!");
}
```

To get this running use the following commnds:

+ `npm install` - To install the dependencies
+ `npm run build` - To copy the files to the bin folder and run tsc
+ `npm run server` - To start the server and open the browser