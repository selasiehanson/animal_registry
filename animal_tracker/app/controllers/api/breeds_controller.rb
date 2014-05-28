class Api::BreedsController < ApplicationController

  def index
    render json: Breed.all
  end

  def show
    render json: Breed.find(params[:id])
  end

  def create
    breed =  Breed.new(model_params)
    if breed.save
      render json: breed
    else
      render json: breed.errors
    end
  end

  def update
    breed = Breed.find(params[:id])
    if breed.update_attributes(model_params)
      render json: breed
    else
      render json: breed.errors
    end
  end

  def destroy
    breed = Breed.find(params[:id])
    breed.destroy
    head :no_content
  end

  def model_params
    params.require(:breed).permit(:name, :animal_id)
  end
end
