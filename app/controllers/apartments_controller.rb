class ApartmentsController < ApplicationController
  before_action :set_apartment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  def create
    @apartment = current_user.apartments.new(apart_params)

    respond_to do |format|
      if @apartment.save
        format.html { redirect_to @apartment, notice: 'Apartment was successfully created.' }
        format.json { render :show, status: :created, location: @apartment }
      else
        format.html { render :new }
        format.json { render json: @apartment.errors, status: :unprocessable_entity }
      end
    end
  end

end
