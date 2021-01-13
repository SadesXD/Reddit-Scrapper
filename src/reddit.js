const axios = require("axios")
const moment = require("moment")

function reddit(options){

    if(!options){
        throw new TypeError("Can't found search data")
    }
    /**
     * @type {String} Search data
     */
    this.search = options.search

    /**
     * @type {Number} limits of json data
     */
    this.limits = options.limits

    if(this.limits && isNaN(this.limits)){
        try{
            parseInt(this.limits)
        }catch{
            throw new TypeError("Limits data must be a number");
        }
    }

    let page = `https://www.reddit.com/r/${this.search.replace(/ /gi,'+')}.json?sort=top&t=daily`;

    let fetch = axios({
                    method:"get",
                    url:page
                }).then(res => {
                    let data = res.data
                    let basic = data.data.children
                    let counting;

                    if(this.limits){
                        counting = this.limits
                    }else if(this.limits === 0){
                        counting = 1
                    }else if(this.limits > basic.length){
                        counting = basic.length
                    }else if(this.limits < basic.length){
                        counting = basic.length
                    }else{
                        counting = basic.length
                    }

                    let paket = []
                    for(let i = 0;i < counting; i++){
                        let allData = data.data.children[i].data
                        let title = allData.title
                        let img = allData.url
                        let link = 'https://www.reddit.com' + allData.permalink
                        let thumbsup = allData.ups
                        let thumbsdown = allData.downs
                        let nsfw = allData.over_18
                        let comment = allData.num_comments
                        let linkFrom = allData.subreddit_name_prefixed
                        let authorUser = allData.author
                        let timeCreate = moment.utc(allData.created_utc).format('lll')
                        let subreddit = allData.subreddit
                        let id = allData.id
                        let voteRatio = allData.upvote_ratio
                        let kerangka = {
                            "title":title,
                            "image":img,
                            "link":link,
                            "like":thumbsup,
                            "dislike":thumbsdown,
                            "comment":comment,
                            "subredditName":linkFrom,
                            "author":authorUser,
                            "dateCreated_UTC":timeCreate,
                            "subreddit":subreddit,
                            "id":id,
                            "voteRatio":voteRatio,
                            "nsfw":nsfw
                        }
                        paket.push(kerangka)
                    }
                    return new Promise((resolve,reject) => {
                        resolve(
                            {
                                "data":paket
                            }
                        )
                        reject("[ Something went wrong ], Need help with reddit-scrapper ??, Join our discord server: https://discord.gg/8rUvTYhFqK")
                    })
                }).catch(err => {
                    throw new TypeError("[ Can't found your search ], Need help with reddit-scrapper ??, Join our discord server: https://discord.gg/8rUvTYhFqK")
                })
                
    return fetch
}

module.exports = reddit;
