# coding: utf-8

module Barcode
  extend ActiveSupport::Concern

  # included do
  #   extend ClassMethods
  # end

  module ClassMethods
    def copmlete_barcode(barcode)
      return nil if barcode.blank?
      barcode_without_checkdigit = barcode[0..11]
      checkdigit = calculate_check_digit(barcode[0..11])
      barcode_without_checkdigit + checkdigit
    end

    # Barcode(13): NNNNNNNNNNNNX
    #              3210987654321
    #              1111
    # N: Numbers
    # X: Check digit
    #
    # Check digit:
    #   * Sum even place numbers then times 3
    #   * Sum odd place numbers
    #   * Sum both even and odd sums
    #   * Get one's place number of the sum
    #   * 10 minus the above
    #   * It's checkdigit. If it is 10, check digit is 0
    #
    def calculate_check_digit(barcode_without_checkdigit)
      return nil if barcode_without_checkdigit.blank?

      sum_odd, sum_even = 0, 0
      (1..12).each do |i|
        digit = barcode_without_checkdigit[-i].to_i
        if (i+1).odd?
          sum_odd += digit
        else
          sum_even += digit
        end
      end
      cdigit = 10 - ((sum_even * 3 + sum_odd) % 10)
      cdigit = cdigit == 10 ? 0 : cdigit
      cdigit.to_s
    end
  end

  def check_digit
    @check_digit ||= calculate_check_digit
  end

  def image_url
    "http://www.no-music-no-life.net/~tsukaban/mkjan/mkjan.php?i=#{barcode}&text=true&y=50&nx=2"
  end

  private

  def calculate_check_digit(code)
    self.class.calculate_check_digit(code[0..11])
  end
end
