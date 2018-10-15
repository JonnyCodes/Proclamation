# Proclamation!

I wanted to play around and learn how signals worked, so I decided to write my own.

```javascript
let herald = new Proclamation.Herald();

herald.hark(listener, this);
herald.hark(onceTest, this, true);

herald.proclaim("*GASP* Doth mine ears deceive me?");
herald.proclaim("*GASP* Doth mine ears deceive me?", "A second parameter?! What is this wizardry!!");

herald.unhand(listener, this);
herald.proclaim();

function listener(param1, param2) {
    console.log(param1);
    if (param2) {
        console.log(param2);
    }
}

function onceTest() {
    console.log("Be gone, For I have had enough of your foolishness!");
}
```

See tihs example running [here.](https://jonnycodes.github.io/Proclamation/)

To get this running use the following commnds:

+ `npm install` - To install the dependencies
+ `npm run build` - To copy the files to the bin folder and run tsc
+ `npm run server` - To start the server and open the browser