var mycollection = {

    2548: {
        'album':  'slippery when wet',
        'artist': 'Bon Jovi',
        'tracks': [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    
    2468: {
        'album':  '1999',
        'artist': 'prince',
        'tracks': [
            '1999',
            'Little Red Corvett'
        ]


    },

    1245: {
        'artist': 'Robert Palmer',
        'tracks': []

    },
    5439: {
        'album': 'ABBA Gold'
    }
};

var collectionCopy = JSON.parse(JSON.stringify(mycollection));
/*
in this 'CHALENGE!!' you have to use you're nolege and make a program that upgrade the collection
.1: upgrade 5439 ('artist': ABBA)
.2: upgrade 5439 (track, Take a Chance on Me)
.3: upgrade 2548 (artist, ''None)
.4: upgrade 1245 (tracks, "Addicted to Love")
.5: upgrade 2468 (tracks, "Free")
.6: upgrade 2548 (track, ''None)
.7: upgrade 1245 (album, 'Riptide')
Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), 
and a value (like "Addicted to Love")
to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), 
update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before
adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), 
push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
*/
function updatecollection(id, prop, val){
   if (prop === 'tracks' && val !== '') {
   if(mycollection[id][prop]) {
    mycollection[id][prop].push(val);
   }
   else {
    mycollection[id][prop]=[val];
   }
  } else if (val !== '') {
    mycollection[id][prop] = val;
  } else {
    delete mycollection[id][prop];
  }

    return mycollection
}

updatecollection(5439,'artitst','ABBA')

console.log(mycollection);
