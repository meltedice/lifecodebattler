# coding: utf-8

class CharacterBarcode
  include ActiveModel::Model
  include Barcode

  attr_accessor :hitpoint, :strength, :defence
  # attr_accessor :race # 0:machine 1:animal 2:fish 3:bird 4:human

  def initialize(attrs)
    self.hitpoint  = attrs[:hitpoint] || 0
    self.strength  = attrs[:strength] || 0
    self.defence   = attrs[:defence]  || 0
  end

  def barcode
    @barcode ||= build_barcode
  end

  # Barcode
  # 先読みにするには左から3番目を9,10番目を5にする
  def build_barcode
    code = ""
    code += build_hitpoint_code[0..1] + "9" # 3 digits
    code += build_strength_code # 2 digits
    code += build_defence_code  # 2 digits
    code += build_race_code     # 1 digit
    code += build_job_code      # 1 digit
    code += "5"                 # 1 digit (Fixed)
    code += build_ability_code  # 2 digits
    code += calculate_check_digit(code, digits: 13)

    code
  end

  def image_url
    "http://www.no-music-no-life.net/~tsukaban/mkjan/mkjan.php?i=#{barcode}&text=true&y=50&nx=2"
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

  # 種族: 1 digit
  #
  # 0: 機械
  # 1: アニマル
  # 2: 魚族
  # 3: バード
  # 4: ヒューマン
  #
  def build_race_code
    "4"
  end

  # 職業: 1 digit
  #
  # 0-6: 戦士
  # 7-9: 魔法使い
  #
  def build_job_code
    "0"
  end

  # 特殊能力: 2 digits
  #
  # 00: 主人公
  # ...
  #
  def build_ability_code
    "00"
  end
end
