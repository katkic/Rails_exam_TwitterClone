Rails.application.routes.draw do
  root 'top#index'
  resources :posts do
    collection do
      post :confirm
    end
  end
end
