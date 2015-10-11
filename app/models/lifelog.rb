class Lifelog
  include ActiveModel::Model

  attr_accessor :steps, :distance_m, :usage_time_s

  def initialize(attrs={})
    self.steps        = attrs[:steps]
    self.distance_m   = attrs[:distance_m]
    self.usage_time_s = attrs[:usage_time_s]
  end

end
