const feed = require(`../model/Article`)
const getHomepage =(req, res ) => {
feed.find()
.then((result) => res.render(`index`,  {articles: result}))//we replacee render with redirect and index to new feed
.catch(err => console.log(err))
}
const getnewfeed =(req, res ) => {
    feed.find()
    // .sort({created_at :-1})
    .then((err) => res.render(`new-feed`,{err:err.errors}))//render
    .catch(err => console.log(err))
}
const createFEED = (req, res )=> {
    const newFEED = new feed(req.body)
    newFEED.save()
    .then(() => res.redirect(`/`))
    .catch(err => res.send(res.send('<script>alert("error"); window.location.href="/";</script>')





    ))
}
const getFullFEED = (req, res) => {
    feed.findById(req.params.id)
    .then((result) =>  res.render(`fullFEED`, {feed: result} ))
    .catch(err =>  console.log(err))
}
const deleteFEED = (req , res ) => {
    feed.findByIdAndDelete (req.params.id)
    .then (() =>res.redirect(`/`))
    .catch(err => console.log(err))
}
const getUpdatepage = (req,res)=>{
    feed.findById(req.params.id)
    .then ((result) => res.render(`edit`, {feed: result}))
    .catch(err => console.log(err))
}
const editFEED = (req,res)=>{
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then ((feedId) => res.redirect(`/fullFEED/${feedId.id}` ))
    .catch(err => console.log(err))
}
module.exports = {
    getHomepage,
    getnewfeed,
    createFEED,
    getFullFEED,
    deleteFEED,
    getUpdatepage,
    editFEED
}