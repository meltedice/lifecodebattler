# coding: utf-8

require 'rails_helper'

RSpec.describe Barcode, type: :model do

  context "new" do
    RSpec.shared_examples "barcode generator" do |expected_barcode, attrs|
      subject { Barcode.new(attrs) }

      its(:barcode) { should_not be_blank  }
      its(:barcode) { should eq expected_barcode.gsub(' ', '') }
    end

    # context "forward reading codes (先読み)" do
    #   it_behaves_like "barcode generator", "3698994 455851", { hitpoint: 36900, strength: 8900, defence: 9400 }
    #   it_behaves_like "barcode generator", "0320813 183500", { hitpoint: 3200,  strength: 800,  defence: 1300 }
    # end

    # context "backward reading codes (後読み)" do
    #   it_behaves_like "barcode generator", "490147 0001282", { hitpoint: 42100,  strength: 9600,  defence: 8700 }
    # end
  end

  context "check digits" do
    RSpec.shared_examples "correct check digit" do |expected_checkdigit, barcode|
      barcode = barcode.gsub(' ', '')
      it "calculates check digit" do
        expect(Barcode.calculate_check_digit(barcode)).to eq expected_checkdigit
      end
    end

    it_behaves_like "correct check digit", "1", "3698994 45585" # "1"
    it_behaves_like "correct check digit", "0", "0320813 18350" # "0"
    it_behaves_like "correct check digit", "2", "4901470 00128" # "2"
  end

end
