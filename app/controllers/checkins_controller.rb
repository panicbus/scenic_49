class CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
  end

  def create
<<<<<<< HEAD
    checkin = Checkin.create(params[:checkin])

      if checkin.errors.empty?
        render json: checkin, status: 201,
        :notice => 'Thanks for posting your comments.'
      else
        flash.now[:notice] = "Name field can't be blank."
        redirect_to checkins_path

=======
    # TODO: These two lines are really bad as they are vulnerable to mass assignment exploits - CW 2/23/14
    @location = Location.find(params[:checkin][:location_id])
    @checkin = Checkin.new(params[:checkin])

    if @checkin.save
      respond_to do |format|
        format.js
        #format.html  ## TODO: Probably good for browers that don't have JS enabled - CW 2/23/14
>>>>>>> a8381867757ce653415e871b36abe7f584b80142
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
      #format.html  ## TODO: Probably good for browers that don't have JS enabled - CW 2/23/14
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  # private

<<<<<<< HEAD
  # def checkin_params
  #   params.require(:friend).permit(:photo, :name, :comment, :location_id)    
  # end
=======
  # TODO: Implement the strong_parameters gem to properly use below on Rails 3 - CW 2/23/14
  #def checkin_params
    #params.require(:checkin).permit(:photo, :name, :comment, :location_id)
  #end
>>>>>>> a8381867757ce653415e871b36abe7f584b80142

end
