const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/api/Plants', (req, res) => {
  res.send([
	  {
		"id": 0,
		"name": "string",
		"latitude": "string",
		"longitude": "string"
	  }
	]);
});

app.get('/api/CheckPlant', (req, res) => {
	// key: plantid als stringn
	console.log(req.query)

	var accessGranted = true
	if ( req.query.plantid % 2 )
	{
		res.status(400);
		accessGranted = false
	}
	else 
	{
		res.status(200);
	}

	res.send([
		{
		  "id": req.query.plantid,
		  "access": accessGranted
		}
	  ]);
	});
  
app.get('/api/Plants/Search', (req, res) => {
	console.log(req.query)

/* 	for (const key in req.query) {
		console.log(key, req.query[key])
	}
 */
	res.send([
		{
			"id": 0,
			"name": req.query.keyword,
			"latitude": "string",
			"longitude": "string"
		},
		{
			"id": 1,
			"name": req.query.keyword+"001",
			"latitude": req.query.skip+"001",
			"longitude": req.query.top+"001"
		},
		{
			"id": 2,
			"name": req.query.keyword+"002",
			"latitude": "string",
			"longitude": "string"
		},
		{
			"id": 3,
			"name": req.query.keyword+"003",
			"latitude": "string",
			"longitude": "string"
		}
	]);

  });


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});