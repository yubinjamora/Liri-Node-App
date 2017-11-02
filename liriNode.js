var key = require("./key.js")
var fs = require("fs");
var request = require("request");

var Twitter = require("twitter");

    var myTweets = function() {
        var client = new Twitter(keys);
    
    
       
    var params = {screen_name: 'nodejs'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for(var i = 0; i < tweets.length; i++) {
              console.log(tweets[i].created_at);
              console.log("");
              console.log(tweet[i], text);
          }
        }
      });
    };


var Spotify = require('spotify');

var spotify = new Spotify({
    id: "e3bb642fd1cb45d0be9a57bde92a7158",
    secret: "084936b5847f4874adfea631c15e8f2d"
  });
  
var singerName = function(artist) {
    return artist.name;
};

var result = function(songName) {
    if (songName === undefined) {
        songName = 'All the Small Things';
    }
};
 
  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

  var song = data.track.items;

  for(var i = 0; i < song.length; i++) {
      console.log(i);
      console.log("Artist: " + song[i].artist.map(singerName));
      console.log("Song's name: " + song[i].name);
      console.log("Preview Song: " + song[i].preview_url);
      console.log("Album: " + song[i].album.name);
      console.log("---------------");
  }


  var myMovie = function(movieName) {
      if(movieName === undefined) {
          movieName = "Thor";
      }

      var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

      request(queryUrl, function(erro, response, body) {
        if(!erro && response.statusCode === 200) {
           var jsonParse = JSON.parse(body);

           console.log("Title: " + jsonParse.Title);
           console.log("Year:" + jsonParse.Year);
           console.log("Rated: " + jsonParse.Rated);
           console.log("IMDB Rating:" + jsonParse.imdbRating);
           console.log("Country: " + jsonParse.Country);
           console.log("Language:" + jsonParse.Language);
           console.log("Plot:" + jsonParse.Plot);
           console.log("Actors: " + jsonParse.Actors);
           console.log("Rottn Tomatoes URL: " + jsonParse.tomatoURL);

        }
    });
  };

  var outcome = function(one, two) {
      switch (one) {
        case "my-tweets":
            myTweets();
            break;

        case "spotify-this-song":
            mySpotify();
            break;
        
        case "movie-this-info":
            myMovie();
            break;

        default:
            console.log("LIRI has no idea what you are saying");
        


      }
  };

  var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };
  
  runThis(process.argv[2], process.argv[3]);