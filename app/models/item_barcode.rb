# coding: utf-8

class ItemBarcode
  include ActiveModel::Model
  include Barcode

  # Item Barcode: 12 digits

  attr_accessor :hitpoint, :strength, :defence

  # * 種別: 1 digit
  #   * 5: 武器(使い捨て)
  #   * 6: 武器
  #   * 7: 防具(使い捨て)
  #   * 8: 防具
  #   * 9: HP アップ
  attr_accessor :kind # 5:disposable_weapon 6:weapon 7:disposable_armor 8:armor 9:hp_up
  # * 種類: 1 digit

  def initialize(attrs)
    self.kind      = attrs[:kind] || 'weapon'
    self.hitpoint  = 0
    self.strength  = 0
    self.defence   = 0
    case kind
    when 'disposable_weapon', 'weapon'
      self.strength  = attrs[:strength] || 0
    when 'disposable_armor',  'armor'
      self.defence   = attrs[:defence]  || 0
    when 'hp_up'
      self.hitpoint  = attrs[:hitpoint] || 0
    end
  end

  def barcode
    @barcode ||= build_barcode
  end

  # Barcode
  # 先読みにするには左から3番目を9,10番目を5にする
  def build_barcode
    # FIXME: Item よくわからない
    code = "0"                  # 1 digit
    code += build_hitpoint_code # 3 digits
    code += build_strength_code # 2 digits
    code += build_defence_code  # 2 digits
    code += build_kind_code     # 1 digit # 種別
    code += build_job_code      # 1 digit # 種類
    code += "00"                # 2 digits (Fixed)
    code += calculate_check_digit(code, digits: 12)

    code
  end

  def image_url
    "https://www.nationwidebarcode.com/wp-content/plugins/barcode-generator/image.php?code=BCGupca&filetype=PNG&dpi=300&scale=2&rotation=0&font_family=0&font_size=8&text=#{barcode}8&thickness=20"
  end

  private

  # 体力: 3 digits of string
  def build_hitpoint_code
    # HP A*10000 + B*1000 + C*100
    #    3*10000 + 6*1000 + 9*100 = 36900
    a = hitpoint / 10_000
    a = 9 if 10 <= a # FIXME
    b = (hitpoint / 1000) % 10
    c = (hitpoint / 100) % 10
    "#{a}#{b}#{c}"
  end

  # 攻撃力: 2 digits of string
  def build_strength_code
    # ST D*1000 + E*100
    #    8*1000 + 9*100 = 8900
    d = strength / 1000
    d = 9 if 10 <= d
    e = (strength / 100) % 10
    "#{d}#{e}"
  end

  # 防御力: 2 digits of string
  def build_defence_code
    # DF F*1000 + G*100
    #    9*1000 + 4*100 = 9400
    f = defence / 1000
    f = 9 if 10 <= f
    g = (defence / 100) % 10
    "#{f}#{g}"
  end

  # 種別: 1 digit
  #   * 5: 武器(使い捨て)
  #   * 6: 武器
  #   * 7: 防具(使い捨て)
  #   * 8: 防具
  #   * 9: HP アップ
  #
  def build_kind_code
    "6"
  end

  # * 種類: 1 digit
  #
  def build_job_code
    "0"
  end
end
