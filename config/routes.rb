Scenic49::Application.routes.draw do
  
 resources :checkins

  root :to => "checkins#index"

  # get "walks/index"
  # get "walks/create"
  # get "walks/show"
	
	get "/all_checkins", to: "checkins#all_checkins"  

  get "checkins/findLocation" => "checkins#findLocation"

end
