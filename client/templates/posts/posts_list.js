// var postsData = [
// 	{
// 		title: '摩卡新闻1号',
// 		url: 'http://www.mocar.cn/'
// 	},
// 	{
// 		title: '摩卡新闻2号',
// 		url: 'http://www.mocar.cn/'
// 	},
// 		{
// 		title: '摩卡新闻3号',
// 		url: 'http://www.mocar.cn/'
// 	},
// 	{
// 		title: '摩卡新闻4号',
// 		url: 'http://www.mocar.cn/'
// 	}
// ];

// Template.postsList.helpers({
// 	post:postDate
// });

// var postsData = [
//   {
//     title: 'Introducing Telescope',
//     url: 'http://sachagreif.com/introducing-telescope/'
//   },
//   {
//     title: 'Meteor',
//     url: 'http://meteor.com'
//   },
//   {
//     title: 'The Meteor Book',
//     url: 'http://themeteorbook.com'
//   }
// ];
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  },
});
