Scenic49::Application.routes.draw do
  
 resources :checkins

  root :to => "checkins#index"
	
	get "/all_checkins", to: "checkins#all_checkins"  

  get "checkins/findLocation" => "checkins#findLocation"

end
