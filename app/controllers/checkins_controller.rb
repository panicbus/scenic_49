class CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
    @checkin = Checkin.new

  end

  def create
    checkin = Checkin.create(checkin_params)

      if checkin.errors.empty?
        render json: checkin, status: 201,
        :notice => 'Thanks for posting your comments.'
      else
        flash.now[:notice] = "Name field can't be blank."
        redirect_to checkins_path

      end

  end

  def show
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

  private

  def checkin_params
    params.require(:friend).permit(:photo, :name, :comment, :location_id)    
  end

end
