class Location < ActiveRecord::Base
  attr_accessible :lat, :long, :name, :description

	has_many :checkins, dependent: :destroy  

	validates :name, presence: true

end
