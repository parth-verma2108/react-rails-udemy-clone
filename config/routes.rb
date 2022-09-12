Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do

      resources :courses
      get 'courses/index'
      post 'courses/create'
      delete 'courses/:id', to: 'courses#destroy'
    end
  end

  root 'courses#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
