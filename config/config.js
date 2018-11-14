var in_client_id = '5172880969aa4f469d4b3375c5bd8e62',
		in_client_secret = 'e3f090bfe6b84cc3a75b03b9e544594b',
		in_redirect_uri = 'http://localhost:3000/auth/instagram/callback',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code'

var db_uri = 'mongodb://localhost:27017/instagram-auth';

module.exports = {

	port: process.env.PORT || 3000,
	db: {
		uri: db_uri
	},
	instagram: {
		client_id: in_client_id,
		client_secret: in_client_secret,
		auth_url: in_auth_url,
		redirect_uri: in_redirect_uri
	}

};