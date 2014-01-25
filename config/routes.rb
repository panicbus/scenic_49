Scenic49::Application.routes.draw do
  
  root :to => "walks#index"

  get "walks/index"
  get "walks/create"
  get "walks/show"


end
