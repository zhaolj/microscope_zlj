Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // console.log('checked = ' + $(e.target).find('[name=flagged]')[0].checked);

    const post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      author: $(e.target).find('[name=author]').val(),
      category: $(e.target).find('[name=category]').val(),
      flagged: $(e.target).find('[name=flagged]')[0].checked,
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  },
});
