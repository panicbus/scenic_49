class Checkin < ActiveRecord::Base
  attr_accessible :comment, :location_id, :name, :photo

  belongs_to :location 

  validates :name, presence: true

  # before_save do |a|
  # 	a.name = a.name.downcase.titleize
  # end

  has_attached_file :photo, 
                    styles: {
                      thumb: '100x100>',
                      square: '200x200#',
                      medium: '370x370>'
                    }
                    
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

end
