require 'rails_helper'

RSpec.describe BarcodesController, type: :controller do

  describe "GET #generate" do
    it "returns http success" do
      get :generate
      expect(response).to have_http_status(:success)
    end
  end

end
