class Api::EventsController < ApplicationController

  def index
    render json: Event.all
  end

  def show
    render json: Event.find(params[:id])
  end

  def create
    event =  Event.new(model_params)
    if event.save
      render json: event
    else
      render json: event.errors
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update_attributes(model_params)
      render json: event
    else
      render json: event.errors
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content
  end

  def model_params
    params.require(:event).permit(:name, :count, :breed_id, :date)
  end
end
