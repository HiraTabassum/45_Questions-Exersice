/*
Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ali", "Rang-e-Mohabbat");
var album2 = myAlbum("Junaid", "Roshan Andhera");
var album3 = myAlbum("Hassan", "Masoom-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberoftracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberoftracks: numberoftracks };
}
var album4 = myAlbum2("Ali", "Rang-e-Mohabbat", 30);
var album5 = myAlbum2("Junaid", "Roshan Andhera", 55);
var album6 = myAlbum2("Hassan", "Masoom-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
