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
    @app = Ncmb::DataStore.new("#{ENV["APP_KEY"]}", "#{ENV["CLIENT_KEY"]}", 'Log')
    response = @app.all()
    response["results"].last
    render json: response
  end
end
