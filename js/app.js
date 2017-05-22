var template = '<li><img><div><h4><p></p></h4></div></li>';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getData(searchTerm){
    var query = {
        part: 'snippet',
        key: 'AIzaSyB2hnuaxwfUATuNQAyxvQH2niK2u7l-gKo',
        q: searchTerm,
        r: 'json'
    }
    console.log(query);
    $.getJSON(YOUTUBE_URL, query, function(data){displayData(data);});
}

function displayData(data){
    console.log(data);
    var resultElm = ''
    //console.log(data.items);
    if (data){
        data.items.forEach(function(item){
            console.log(item.snippet.thumbnails.default.url);
            console.log(item.snippet.title);
            console.log(item.snippet.description);
            var result = $(template);
            result.find('img').attr("src", item.snippet.thumbnails.default.url);
            result.find('h4').html(item.snippet.title);
            result.find('p').html(item.snippet.description);
            $('ul').append(result);
            //console.log(resultElm);
        });
    }
    else{
        $('ul').html('<p>NO RESULTS FOUND</p>');
    }
}

function watchSubmit(){
    $('#search').submit(function(e){
        e.preventDefault();
        var searchTerm = $(this).find('#item').val();
        console.log(searchTerm);
        getData(searchTerm);
    });
}
$(function(){watchSubmit();});
