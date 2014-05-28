# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  count      :integer
#  type       :string(255)
#  date       :datetime
#  breed      :integer
#  created_at :datetime
#  updated_at :datetime
#

class Event < ActiveRecord::Base
end
