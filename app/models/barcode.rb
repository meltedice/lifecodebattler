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

end
