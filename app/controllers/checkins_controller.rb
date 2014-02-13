class CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
    @checkin = Checkin.new

  end

  # def findLocation

  # end

  def create
    # binding.pry
    @checkin = Checkin.create(params[:checkin])
    render json: @checkin, status: 201

  end

  def show
    # binding.pry
    location = Location.find_by_id(params[:id])
    @checkins = location.checkins
    render json: @checkins, status: 201
    
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
