require 'rails_helper'

RSpec.describe Barcode, type: :model do

  RSpec.shared_examples "barcode generator" do |barcode, attrs|
    subject { Barcode.new(attrs) }

    its(:barcode) { should_not be_blank  }
  end

  context "new" do
    it_behaves_like "barcode generator", "<barcode here>", { dummy: :dummy }
  end

end
