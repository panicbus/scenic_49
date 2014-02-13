function findLocation(id){
	$.get("/checkins/" + id, id).done(function(data){
			console.log(data)
	})
}