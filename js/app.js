var template = '<li><img><div><h4><p></p></h4></div></li>';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function addSearchResult(){

}

function watchSubmit(){
    $('#search').submit(function(e){
        e.preventDefault();
        var searchTerm = $(this).find('#item').val();
        console.log(searchTerm);
    });
}
$(function(){watchSubmit();});
