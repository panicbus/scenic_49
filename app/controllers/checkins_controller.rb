class CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
  end

  def create

    # TODO: These two lines are really bad as they are vulnerable to mass assignment exploits - CW 2/23/14
    @location = Location.find(params[:checkin][:location_id])
    @checkin = Checkin.new(params[:checkin])

    if @checkin.save
      flash[:notice] = 'Your check-in was successfully saved!'
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.js { render :show }
      end
    end
  end

  def show
    @location = Location.find_by_id(params[:id])
    @checkins = @location.checkins
    @checkin = Checkin.new

    respond_to do |format|
      format.js 
    end
  end

  def all_checkins
    @all_checkins = Checkin.all
    @locations = Location.all
    
    respond_to do |format|
      format.json { render json: @all_checkins}
      format.html
    end    
  end

  def edit
  end

  def update
  end

  def destroy
  end

  # private

  # TODO: Implement the strong_parameters gem to properly use below on Rails 3 - CW 2/23/14
  #def checkin_params
    #params.require(:checkin).permit(:photo, :name, :comment, :location_id)
  #end

end
