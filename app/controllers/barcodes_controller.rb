class BarcodesController < ApplicationController
  def generate
    @barcode = Barcode.new(params)

    render json: @barcode
  end
end
