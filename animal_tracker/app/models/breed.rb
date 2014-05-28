# == Schema Information
#
# Table name: breeds
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  animal_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Breed < ActiveRecord::Base
  belongs_to :animal
end
