function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];  
}

Playlist.prototype.overallRating = function () {
  let total = 0;
  for (let track of this.tracks) {
    total += track.rating;
    console.log(track)
  }
  return total / this.tracks.length;
}

Playlist.prototype.totalDuration = function () {
  let totalDuration = 0;
  for (let track of this.tracks) {
    totalDuration += track.length;
  }
  return totalDuration;
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const lib = new Library ('favorite', 'Xia');
const p1 = new Playlist ('workout');
const p2 = new Playlist ('on the way');
lib.playlists.push(... [p1, p2])

const t1 = new Track ('Code Monkey', 4, 240)
const t2 = new Track ('Model View Controller', 3, 220)
const t3 = new Track ('Four Thirty-Three', 5, 250)
p1.tracks.push(...[t1, t2, t3])

console.log(lib)
console.log('p1 overall rating: ', p1.overallRating())
console.log('p1 total duration: ', p1.totalDuration())