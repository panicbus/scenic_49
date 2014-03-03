# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

locations = [ ['Station 1', 'City Hall', -122.41713523864746, 37.77956816727315],
							['Station 2', 'Chinatown Gate', -122.40524768829346, 37.78875968591083],
							['Station 3', 'Entrance to the Presidio on Lombard', -122.44736909866332, 37.79850958608104],
							['Station 4', 'Lincoln Avenue and the Great Highway', -122.51024007797241, 37.76408245273552],
							['Station 5', 'AIDS Memorial, Golden Gate Park', -122.4603670835495, 37.76968431368863],
							['Station 6', 'Laguna Honda and Dewey, backside of Twin Peaks', -122.4591064453125, 37.74728704926913],
							['Station 7', 'Cesar Chavez and Dolores', -122.42473125457762, 37.747931791686426],
							['Station 8', 'Embarcero and the Ferry Building', -122.39400386810303, 37.795220198366735],
							['Station 9', 'Financial District', -122.39996910095215, 37.79325327800921] ] 

locations.each do |location|
	Location.create(name:location[0], description:location[1], lat:location[2], long:location[3])
end