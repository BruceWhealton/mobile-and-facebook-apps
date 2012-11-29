window.fbAsyncInit = function() {
	FB.init({
		appId      : '200949610039968', // App ID
		channelUrl : '//my-family-lineage.com/mobile-and-facebook/facebook/wordsalad/channel.php', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true,  // parse XFBML
		frictionlessRequests : true // enable frictionless requests
	});

	// Additional initialization code here
	//populateStories();

	//Next, find out if the user is logged in
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			var uid = response.authResponse.userID;
			accessToken = response.authResponse.accessToken;

			FB.api('/me', function(info) {
				console.log(info);
				$('#welcome').html("<h3>Hello " + info.first_name + ", <a href='#chat'>Join the Chat Below</a></h3>" );
			});


		} else if (response.status === 'not_authorized') {
			//User is logged into Facebook, but not your App


			  var oauth_url = 'https://www.facebook.com/dialog/oauth/';
			  oauth_url += '?client_id=200949610039968'; //Your Client ID
			  oauth_url += '&redirect_uri=' + 'https://apps.facebook.com/wordsalad-online/'; //Send them here if they're not logged in
			  oauth_url += '&scope=user_about_me,user_location,user_photos,publish_actions,user_birthday,user_likes';
		
			  window.top.location = oauth_url;


		} else {
			// User is not logged into Facebook at all
			window.top.location ='https://www.facebook.com/index.php';
		} //response.status
	}); //getLoginStatus
}; //fbAsyncInit


//Get videos from Lynda.com youtube feed
function populateVideos(data) {
  var entries = data.feed.entry;
  var output = '<h2 class="label">Latest Videos</h2>';

  for (var i=0; i<data.feed.entry.length; i++) {
    var entriesID=entries[i].id.$t.substring(42);
    var entriesTitle=entries[i].title.$t;
    var entriesDescription=entries[i].media$group.media$description.$t;
    var entriesThumbnail=entries[i].media$group.media$thumbnail[1].url;

    if (i==0) {
      output += '<div class="first">';
      output +=   '<h3>' + entriesTitle + '</h3>';
      output +=   '<iframe src="https://www.youtube.com/embed/'+entriesID+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay="0" frameborder="0" allowfullscreen></iframe>';
      output +=   '<p>' + entriesDescription + '</p>';
      output += '</div>';
      output += '<ul>';
    } else {
      output += '<li><div class="entriestitle">' + entriesTitle + '</div>';
      output += '<a href="https://www.youtube.com/watch?v=' + entriesID + '&feature=youtube_gdata" target="_blank"><img src="' + entriesThumbnail + '" alt=' + entriesTitle + ' /></a>';
    }
  }
  output +='</ul>';
  document.getElementById('videogroup').innerHTML = output;
}

//----- Adding The JavaScript to pull the JSON feed -------------------------------------

function populateStories(data) {
/*$.getJSON('https://my-family-lineage.com/wp/?json=1', function(data) {*/
    var output = '';
    var excerpt='';
    output = '<h2 class="label">Latest Blog Posts</h2>';
    $.each(data.posts, function(key, val) {
      var title = data.posts[key].title;
      var link = data.posts[key].url;

      //Set up the output
      output += '<div id="storyid' +key+ '" class="articles">';
      output += '<h3><a href="' + link + '" target="_blank">' + title + '</a></h3>';
      output +='<p>' + data.posts[key].excerpt;
	  output += '<a onclick="postToFeed(\'' + title + '\',\'' + link + '\',\'' + excerpt + '\');">Post to Feed</a>';
	  output += '<a onclick="messageToFriend(\'' + title + '\',\'' + link + '\',\'' + excerpt + '\'); return true;" >Message a Friend</a>';
      output += '</p>';
      output += '</div>';
    }); //Go through each piece of JSON data
    document.getElementById('blog').innerHTML=output;
/*  });*/ //Get JSON Data for Stories
} //Populate Stories
  
function messageToFriend(myTitle, myLink, myExcerpt) {
  FB.ui({
    'method': 'send',
    'link': myLink,
    'picture': 'https://my-family-lineage.com/facebook/images/LogoMyFamilyLineage.png',
    'name': myTitle,
    'caption': 'My Family Lineage Blog - Discovering Your Roots on the Web',
    'description': myExcerpt
  }, function(response) {
    if (response && response.post_id) {
      document.getElementById('mymessage').innerHTML = "Thanks. The message has been sent.";
    } else {
      document.getElementById('mymessage').innerHTML = "The message was cancelled.";
    } //Response from send attempt
  }); // Call to FB.ui
} // messageToFriend


function postToFeed(myTitle, myLink, myExcerpt) {
	FB.ui({
		method: 'feed',
		'link': myLink,
		'picture': 'https://my-family-lineage.com/facebook/images/LogoMyFamilyLineage.png',
		'name': myTitle,
		'caption': 'My Family Lineage Blog - Using the Web to Explore Your Roots',
		'description': myExcerpt
	}, function(response) {
		if (response && response.post_id) {
			document.getElementById('mymessage').innerHTML = "Thanks. This has been posted onto your timeline.";
		} else {
			document.getElementById('mymessage').innerHTML = "The post was not published.";
		} //Response from post attempt
	}); // Call to FB.ui
} // postToFeed

// Load the JavaScript SDK Asynchronously
(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));