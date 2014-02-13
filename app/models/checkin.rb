class Checkin < ActiveRecord::Base
  attr_accessible :comment, :location_id, :name

  belongs_to :location 

  validates :name, presence: true

  before_save do |a|
  	a.name = a.name.downcase.titleize
  end
end
