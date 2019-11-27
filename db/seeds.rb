# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(email: "helloworld@gmail.com", password: "hejiayu21")

user2 = User.create!(email: "hellothere@world.edu", password: "123123123123")

# Apartment.create(user_id: 1, street_a: "J street", street_b: "11th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "Afternoon")
#
# Apartment.create(user_id: 2, street_a: "X street", street_b: "1th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "Afternoon")
#
# Apartment.create(user_id: 2, street_a: "B street", street_b: "10th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "Jane Doe", contact_number: "123-456-789", contact_hour: "24/7")

user1.apartments.create!(street_a: "Street C", street_b: "Street A", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "9am - 5pm")

user2.apartments.create!(street_a: "Street C", street_b: "Street B", city: "San Diego", zipcode: "92121", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "9am - 5pm")
