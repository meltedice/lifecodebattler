class BarcodesController < ApplicationController
  def today
    steps = params[:steps]
    distance_m = params[:distance_m]
    usage_time_s = params[:usage_time_s]

    attrs = {
      hitpoint: 12300,
      strength: 4500,
      defence:  6700,
    }
    @charactor_barcode  = CharacterBarcode.new(attrs)
    barcodes = [@charactor_barcode]
    render json: barcodes
  end

  def show
    @barcode  = Barcode.new(params)

    render json: @barcode
  end

  def generate
    @barcode = CharacterBarcode.new(params)

    render json: @barcode
  end

  def checkdigit
    @code = CharacterBarcode.copmlete_barcode(params[:barcode])

    render json: { barcode: @code }
  end
end
