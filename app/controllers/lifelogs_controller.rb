class LifelogsController < ApplicationController
  # def index
  # end

  def latest
    @lifelog = Lifelog.new(steps: 555555, distance_m: 6666, usage_time_s: 33333)
    render json: @lifelog
  end

  # def get
  # end
  #
  def get
    @app = Ncmb::DataStore.new("#{ENV["APP_KEY"]}", "#{ENV["CLIENT_KEY"]}", 'lifecodebattler_log')
    response = @app.all()
    result = response["results"].last
    render json: result
  end
end
