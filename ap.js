 // console.log("patience Big")
 var content = document.getElementById("content");
 fetch("https://api.themoviedb.org/3/movie/popular?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1").then(response=>{
 	return response.json()
}).then(data=>{
 	console.log(data.results)
 	var html = "";
 	data.results.forEach(item=>{
 		const div = `
 			<div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img id="image" src="https://image.tmdb.org/t/p/w500/${item.poster_path}
				" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="80%" fill="#55595c"/></img>
           
          </div>


              <p class="card-text"></p>
              <p>genre: <span id="genre">${item.genre_ids[0]}</span></p>

              <p>title: <span id="title">${item.original_title}</span></p>
       </div>
          
 		`
 		html += div;

          
 	})
 	content.innerHTML= html;

 		
})

