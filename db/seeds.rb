# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "ml5403941@gmail.com", password: "hejiayu21")

User.create(email: "hello@world.edu", password: "123123123123")

Apartment.create(user_id: 1, street_a: "J street", street_b: "11th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "Afternoon")

Apartment.create(user_id: 2, street_a: "X street", street_b: "1th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "John Doe", contact_number: "123-456-789", contact_hour: "Afternoon")

Apartment.create(user_id: 2, street_a: "B street", street_b: "10th Broadway", city: "San Diego", zipcode: "92126", state: "CA", country: "USA", contact_name: "Jane Doe", contact_number: "123-456-789", contact_hour: "24/7")
