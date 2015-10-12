class BarcodesController < ApplicationController
  def today
    @character_barcode  = CharacterBarcode.new(@attrs)
    barcodes = [@character_barcode]
    render json: barcodes
  end

  def show
    @character_barcode  = CharacterBarcode.new(@attrs)

    render json: @character_barcode
  end

  def generate
    @barcode = CharacterBarcode.new(params)

    render json: @barcode
  end

  def checkdigit
    @code = CharacterBarcode.copmlete_barcode(params[:barcode])

    render json: { barcode: @code }
  end

  private

  def set_attrs
    steps = params[:steps].to_i
    distance_m = params[:distance_m].to_i
    usage_time_s = params[:usage_time_s].to_i
    usage_time_m = usage_time_s / 60

    hitpoint = ((steps / 10000.0) * 99900).to_i
    strength = 9900 - (usage_time_m * 10)
    strength = 0 if strength < 0
    defence  = distance_m * 10
    defence  = 9900 if 9900 < defence
    @attrs = {
      hitpoint: hitpoint,
      strength: strength,
      defence:  defence,
    }
  end
end
