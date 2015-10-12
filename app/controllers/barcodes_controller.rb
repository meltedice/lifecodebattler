class BarcodesController < ApplicationController
  def today
    @barcode  = Barcode.new(params)
    ary = []
    ary << @barcode
    ary << @barcode
    render json: ary
  end

  def show
    @barcode  = Barcode.new(params)

    render json: @barcode
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
