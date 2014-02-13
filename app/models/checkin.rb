class Checkin < ActiveRecord::Base
  attr_accessible :comment, :location_id, :name

  belongs_to :location 

  validates :name, presence: true
   
end
