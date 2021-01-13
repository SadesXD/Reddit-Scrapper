# Reddit Scrapper

## 📥 Installation
```md
npm install reddit-scrapper
```

## 🔎 About
<b>Reddit Scrapper</b> is simple npm package for help you to get some data in reddit app

## 🔧 Usage
<b>📕 Basic Usage</b>
```js
const reddit = require("reddit-scrapper")

reddit({
    search:"meme"
}).then(response => {
    console.log(response);
    /*
    Output:
    {
        data: [
                {
                title: 'Sorry if this has been posted here before',
                image: 'https://i.redd.it/x9vjahonb0b61.jpg',
                link: 'https://www.reddit.com/r/meme/comments/kw6exy/sorry_if_this_has_been_posted_here_before/',
                like: 3073,
                dislike: 0,
                comment: 42,
                subredditName: 'r/meme',
                author: 'BoneClaw06',
                dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                subreddit: 'meme',
                id: 'kw6exy',
                voteRatio: 0.98,
                nsfw: false
                },
                { More... }
            ]
    }

    */
}).catch(error => {
    console.log(error);
})
```
<b>📚 Limits Usage</b>
```js
const reddit = require("reddit-scrapper");

reddit({
    search:"meme",
    limits: 2 // Just give 2 data of search
}).then(response => {
    console.log(response);
    /*
    Output:
    {
        data: [
                {
                    title: 'Sorry if this has been posted here before',
                    image: 'https://i.redd.it/x9vjahonb0b61.jpg',
                    link: 'https://www.reddit.com/r/meme/comments/kw6exy/sorry_if_this_has_been_posted_here_before/',
                    like: 3073,
                    dislike: 0,
                    comment: 42,
                    subredditName: 'r/meme',
                    author: 'BoneClaw06',
                    dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                    subreddit: 'meme',
                    id: 'kw6exy',
                    voteRatio: 0.98,
                    nsfw: false
                },
                {
                    title: 'Pls mods don’t let my 2 hours of making this be in vain',
                    image: 'https://i.redd.it/ma7z29qqi0b61.jpg',
                    link: 'https://www.reddit.com/r/meme/comments/kw746z/pls_mods_dont_let_my_2_hours_of_making_this_be_in/',
                    like: 1205,
                    dislike: 0,
                    comment: 27,
                    subredditName: 'r/meme',
                    author: 'totallyarandomname',
                    dateCreated_UTC: 'Jan 19, 1970 3:21 PM',
                    subreddit: 'meme',
                    id: 'kw746z',
                    voteRatio: 0.93,
                    nsfw: false
                }
            ]
    }
    */
}).catch(error => {
    console.log(error);
})
```

## 📂 Opinion
> If you found some bug or you have some suggestion, feel free to join our discord server and report / suggest in there, Discord Server: [https://discord.gg/8rUvTYhFqK](https://discord.gg/8rUvTYhFqK)