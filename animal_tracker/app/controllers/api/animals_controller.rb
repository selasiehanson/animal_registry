class Api::AnimalsController < ApplicationController

  def index
    render json: Animal.all
  end

  def show
    render json: Animal.find(params[:id])
  end

  def create
    animal =  Animal.new(model_params)
    if animal.save
      render json: animal
    else
      render json: animal.errors
    end
  end

  def update
    animal = Animal.find(params[:id])
    if animal.update_attributes(model_params)
      render json: animal
    else
      render json: animal.errors
    end
  end

  def destroy
    animal = Animal.find(params[:id])
    animal.destroy
    head :no_content
  end

  def model_params
    params.require(:animal).permit(:name)
  end
end
