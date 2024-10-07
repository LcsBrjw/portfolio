function formatTemps(timestamp) {
    var date = new Date(timestamp*1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getUTCSeconds();

    time = ("0"+hh).slice(-2)+":"+("0"+mm).slice(-2)+":"+("0"+ss).slice(-2);
    console.log(time);


}