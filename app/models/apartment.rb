class Apartment < ApplicationRecord
  belongs_to :user
  validates :zipcode, :contact_name, :contact_number, :contact_hour, presence: true
end
