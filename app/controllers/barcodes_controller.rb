class BarcodesController < ApplicationController
  def generate
    @barcode = Barcode.new(params)

    render json: @barcode
  end

  def checkdigit
    @code = Barcode.copmlete_barcode(params[:barcode])

    render json: { barcode: @code }
  end
end
