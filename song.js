$.getJSON('lyrics.json',function(data){
    var albumSelected = data[Math.floor(Math.random() * data.length)];
    var ran = Math.floor(Math.random() * albumSelected["Songs"].length);
    var lyric = albumSelected["Songs"][ran];
    var album = albumSelected["Album"];
    document.getElementById('lyric').innerHTML = lyric;
    document.getElementById('album').innerHTML = album;
})
//have json file have arrays for each song, which contains the lyrics
// for that song, for each album
