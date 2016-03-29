$.getJSON('lyrics.json',function(data){
    var albumSelected = data[Math.floor(Math.random() * data.length)];
    console.log(albumSelected);
})
