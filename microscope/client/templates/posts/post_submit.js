Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target.url).val(),
            title: $(e.target.title).val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            if (error) {
                return alert(error.reason);
            }

            Router.go('postPage', {
                _id: result._id
            });
        });
    }
});