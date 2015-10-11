# coding: utf-8

require 'rails_helper'

RSpec.describe Barcode, type: :model do

  RSpec.shared_examples "barcode generator" do |expected_barcode, attrs|
    subject { Barcode.new(attrs) }

    its(:barcode) { should_not be_blank  }
    its(:barcode) { should eq expected_barcode.gsub(' ', '') }
  end

  context "new" do
    context "forward reading codes (先読み)" do
      it_behaves_like "barcode generator", "3698994 455851", { hitpoint: 36900, strength: 8900, defence: 9400 }
      it_behaves_like "barcode generator", "0320813 183500", { hitpoint: 3200,  strength: 800,  defence: 1300 }
    end

    context "backward reading codes (後読み)" do
      it_behaves_like "barcode generator", "490147 0001282", { hitpoint: 42100,  strength: 9600,  defence: 8700 }
    end
  end

end
