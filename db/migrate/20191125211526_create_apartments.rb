class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street_a
      t.string :street_b
      t.string :city
      t.string :zipcode
      t.string :state
      t.string :country
      t.string :contact_name
      t.string :contact_number
      t.string :contact_hour
      t.timestamps
    end
  end
end
