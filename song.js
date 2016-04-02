function assignInfo(){
    $.getJSON('lyrics.json',function(data){
        var albumSelected = data[Math.floor(Math.random() * data.length)];
        var ran = Math.floor(Math.random() * albumSelected["Songs"].length);
        var lyric = albumSelected["Songs"][ran];
        var album = albumSelected["Album"];
        document.getElementById('lyric').innerHTML = lyric;
        document.getElementById('album').innerHTML = album;
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
    'img12.png','img13.png','img14.png frien'];
    $('body').css({
        'background-image': 'url(backgrounds/' + images[Math.floor(Math.random() *images.length)] + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
    });
}
// change json file to have arrays for each song, which contains the lyrics
// for that song, for each album
