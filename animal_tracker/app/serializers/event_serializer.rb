class EventSerializer < ActiveModel::Serializer
  attributes :id, :count, :name, :date, :breed_id
end
