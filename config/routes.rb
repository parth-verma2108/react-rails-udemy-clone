Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :courses
      get 'courses/index'
      post 'courses/create'
      delete 'courses/:id', to: 'courses#destroy'
    end
  end
  resources :courses
  root 'courses#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
