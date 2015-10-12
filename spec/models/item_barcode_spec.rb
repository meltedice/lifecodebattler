# coding: utf-8

require 'rails_helper'

RSpec.describe ItemBarcode, type: :model do

  context "new" do
    RSpec.shared_examples "barcode generator" do |expected_barcode, attrs|
      subject { ItemBarcode.new(attrs) }
      let(:expected_barcode_pattern) do
        pattern = expected_barcode.gsub(' ', '')
        Regexp.new("^#{pattern[0..6]}")
      end

      its(:barcode) { should_not be_blank  }
      its(:barcode) { should match expected_barcode_pattern }
      its(:image_url) { should match %r{^https://www.nationwidebarcode.com} }
    end

    # context "forward reading codes (先読み)" do
    #   it_behaves_like "barcode generator", "000400603238", { hitpoint: 0, strength: 400, defence: 0 }
    # end
  end

end
