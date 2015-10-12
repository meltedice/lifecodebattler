class BarcodesController < ApplicationController
  def today
    @barcode  = Barcode.new(params)
    dummy = []
    dummy << @barcode
    dummy << @barcode

    render json: dummy
  end

  def show
    @barcode  = Barcode.new(params)

    render json: dummy
  end

  def generate
    @barcode = Barcode.new(params)

    render json: @barcode
  end

  def checkdigit
    @code = Barcode.copmlete_barcode(params[:barcode])

    render json: { barcode: @code }
  end
end
