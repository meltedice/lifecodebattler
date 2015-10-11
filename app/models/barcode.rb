class Barcode
  include ActiveModel::Model

  attr_accessor :barcode, :image_url
  attr_accessor :hitpoint, :strength, :defence

  def initialize(attrs)
    self.barcode   = "1234567890123"
    self.image_url = "http://example.com/#dummy-image-url"
    self.hitpoint  = 999999
    self.strength  = 77777
    self.defence   = 33333
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
  def self.calculate_check_digit(barcode_without_checkdigit)
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

  def check_digit
    @check_digit ||= calculate_check_digit
  end

  private

  def calculate_check_digit
    self.class.calculate_check_digit(barcode[0..11])
  end
end
