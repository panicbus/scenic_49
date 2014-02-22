class AddPhotoToCheckins < ActiveRecord::Migration
def self.up
    add_attachment :checkins, :photo
  end

  def self.down
    remove_attachment :checkins, :photo
  end
end
