Scenic49::Application.routes.draw do
  
 resources :checkins

  root :to => "walks#index"

  get "walks/index"
  get "walks/create"
  get "walks/show"

  get "checkins/findLocation" => "checkins#findLocation"
  # get "checkins/all_checkins"

end
