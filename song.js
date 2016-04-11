function assignInfo(){
    $.getJSON('http://chancelyrics.surge.sh/lyrics.json',function(data){
        var albumSelected = data[Math.floor(Math.random() * data.length)];
        var ran = Math.floor(Math.random() * albumSelected["Songs"].length);
        var possibleSongs = albumSelected["Songs"];
        var ran2 = Math.floor(Math.random() * Object.keys(possibleSongs).length);
        var song = Object.keys(possibleSongs)[ran2];
        var ranLyric = Math.floor(Math.random() * possibleSongs[song].length);
        var lyric = possibleSongs[song][ranLyric];
        var album = albumSelected["Album"];
        // document.getElementById('lyric').innerHTML = lyric;
        // document.getElementById('song').innerHTML = song;
        // document.getElementById('album').innerHTML = album;
        //for my own knowledge. above(pure JS) does exactly the same as below(JQuery)
        $('#lyric').html(lyric);
        $('#album').html(album);
        $('#song').html(song);
    })
}

$(function(){
    assignInfo();
    backgroundImage();
    //above executes when page first loads
    //below executes on every mouse clicks
    $(document).click(function(){
        assignInfo();
    })
})
function backgroundImage(){
    var images = ['img0.png','img1.png','img2.png','img3.png','img4.png','img5.png',
    'img6.png','img7.png','img8.png','img9.png','img10.png','img11.png',
    'img12.png','img13.png','img14.png'];
    $('body').css({
        'background-image': 'url(backgrounds/' + images[Math.floor(Math.random() *images.length)] + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
    });
}
// change json file to have arrays for each song, which contains the lyrics
// for that song, for each album
