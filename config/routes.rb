Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'apartments#root', constraints: ->(request){ request.format.html? }
  root to: "apartments#homepage"
end
