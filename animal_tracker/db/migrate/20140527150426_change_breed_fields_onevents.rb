class ChangeBreedFieldsOnevents < ActiveRecord::Migration
  def change
    add_column :events, :breed_id, :integer
    remove_column :events, :breed
  end
end
