function listPoems(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
		output += '<li>';
		output += '<a href="#poems" onclick="showPoem(' + val.id + ')">';
		output += '<h3>' + val.title;
		output += ' Written by ' + val.author.name + '</h3>';
		output += '</a></li>';
	}); // go through each post
	output+='</ul>';
	$('#poetrylist').append( $(output) );
} // lists all the posts


function showPoem(id) {
	$.getJSON('http://wordsaladpoetrymagazine.com/wp/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		console.log(data);
		var output='';
		output += '<h3>' + data.post.title + '</h3>';
		output += '<h3>Author: ' + data.post.author.name + '</h3>';
		output += data.post.content;
		$('#thePoem').html(output);
	}); //get JSON Data for Stories
} //showPost

