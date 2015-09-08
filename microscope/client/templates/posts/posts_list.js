Template.postsList.helpers({
    posts: Posts.find({
        category: 'JavaScript'
    })
});