const request = require ('supertest');
const expect = require ('chai').expect;

describe ('GET request' , () => {
    const baseurl = 'https://reqres.in';
    it ('succesfully pass the test for GET request with query param', (done) => {
        
        request(baseurl)
            .get('/api/users')
            .query({ page : '2' })
            .set('Accept', 'appliation/json')
            .set('Content-Type','application/json')
            .end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.page).to.be.equal(2);
				expect(res.body.data[0].id).to.be.equal(7);
				expect(res.body.data[0].first_name).to.be.equal('Michael');
				done();
			});
	});
	it('successfully pass the test for GET api without query param', (done) => {
		request(baseurl)
			.get('/api/users/2')
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.data.id).to.be.equal(2);
				expect(res.body.data.first_name).to.be.equal('Janet');
				done();
			});
	});

	it('successfully pass the test for GET api with path param', (done) => {
		let param = 1;
		request('https://fakerestapi.azurewebsites.net')
			.get('/api/v1/Authors/' + param)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.id).to.be.equal(1);
				done();
			});
	});
});
