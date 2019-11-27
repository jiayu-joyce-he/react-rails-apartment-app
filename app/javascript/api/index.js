const BASE = 'http://localhost:3000'

const getApartments = ()=>{
  return fetch("/apartments")
  .then((response)=>{
    if(response.status === 200){
      return response.json()
    }else{
      return new Promise(()=>{
        resolve({error: 'There was an error.'})
      })
    }
  })
}

const createApartment = function(apartment) {
	return fetch(BASE + '/apartments', {
		body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
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
