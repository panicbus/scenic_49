class CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
    @checkin = Checkin.new

  end

  def create
    checkin = Checkin.create(params[:checkin])

      if checkin.errors.empty?
        render json: checkin, status: 201,
        :notice => 'Thanks for posting your comments.'
      else
        flash.now[:notice] = "Name field can't be blank."
        redirect_to checkins_path
          # binding.pry

      end

      # if @checkin.save
      #    render json: @checkin, status: 201, notice: "Yay!"
      # else
      #   redirect_to checkins_path, notice: "Nope"
      # end

      # respond_to do |format|
      #   format.html {
      #     if success 
      #       flash[:success] = message
      #       render json: @checkin, status: 201
      #     else  
      #       flash[:errors] = message
      #       redirect_to checkins_path
      #     end
      #   }
      #   format.json { render :json => { :success => success, :message => message }.to_json }
      # end 

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
end
