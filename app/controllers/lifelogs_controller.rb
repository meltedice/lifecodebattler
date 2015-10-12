class LifelogsController < ApplicationController
  # def index
  # end

  def latest
    #最新のDBの情報の取得
    @app = Ncmb::DataStore.new("#{ENV["APP_KEY"]}", "#{ENV["CLIENT_KEY"]}", 'Log')
    response = @app.where({user_id: params[:user_id]})["results"]
    steps = response.map { |v| v["steps"] }
    distance_m = response.map { |v| v["distance_m"] }
    usage_time_s = response.map { |v| v["usage_time_s"] }

    sum_steps = steps.inject {|sum, n| sum + n }
    sum_distance_m = distance_m.inject {|sum, n| sum + n }
    sum_usage_time_s = usage_time_s.inject {|sum, n| sum + n }

    result = {"steps": sum_steps,"distance_m": sum_distance_m ,"usage_time_s": sum_usage_time_s}
    render json: result
  end

  # def get
  # end
  #
  def get
    #DBの情報を全て取ってくる
    @app = Ncmb::DataStore.new("#{ENV["APP_KEY"]}", "#{ENV["CLIENT_KEY"]}", 'Log')
    response = @app.where({user_id: params[:user_id]})
    render json: response
  end
end
