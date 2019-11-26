const BASE = 'http://localhost:3000'

let getApartments = function() {
// the function name getapartments is intended to remind you of the restful rails route --> GET '/apartments'.
	return fetch(BASE + '/apartments') // this would be equivalent to going to localhost:3000/apartments in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/apartments, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}
let createApartment = function(cat) {
	return fetch(BASE + '/apartments', {
		body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			console.log(resp)
			let json = resp.json()

			return json
		})
}
export  {
	getApartments, createApartment
}
