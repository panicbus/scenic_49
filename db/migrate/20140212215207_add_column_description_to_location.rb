class AddColumnDescriptionToLocation < ActiveRecord::Migration
  def change
  	add_column :locations, :description, :string
  end
end
