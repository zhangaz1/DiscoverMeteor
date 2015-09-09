Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target.url).val(),
            title: $(e.target.title).val()
        };

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});