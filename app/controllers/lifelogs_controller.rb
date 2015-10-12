class LifelogsController < ApplicationController
  # def index
  # end

  def latest
    #最新のDBの情報の取得
    @app = Ncmb::DataStore.new("#{ENV["APP_KEY"]}", "#{ENV["CLIENT_KEY"]}", 'Log')
    response = @app.where({user_id: params[:user_id]})
    result = response["results"].last
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
