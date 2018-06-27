function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i) rv[i] = arr[i];
    return rv;
}

function godHelpUs(string) { //make it an array
    var why = string.split('') //turn to object
    var what = toObject(why)
    var extraWhat = {}

    for (i in what) {
        extraWhat[1 / i] = what[i]
    }

    console.log('wtf', extraWhat);

    let blah = [];
    for (j in extraWhat) {
        blah.push(extraWhat[j])
    }

    let reversed = [];

    Object.keys(extraWhat)
        .sort()
        .forEach(function (key, i) {
            console.log("key:", key, "value:", extraWhat[key]);
            reversed.push(extraWhat[key])
        }, );
    console.log('reversed:', reversed)

    let newString = "";

    for (k in reversed) {
        newString = newString + reversed[k]
    }
    console.log('newString', newString);
}

godHelpUs("Werewolf")