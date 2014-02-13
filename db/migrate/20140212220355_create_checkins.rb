class CreateCheckins < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.string :name
      t.text :comment
      t.integer :location_id

      t.timestamps
    end
  end
end
