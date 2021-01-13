const reddit = require('../index.js')

reddit({
    search:'meme',
    limits: 3
}).then(res => {
    console.log(res.data.length);
})