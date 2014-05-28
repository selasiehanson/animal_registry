class ChangeEventFields < ActiveRecord::Migration
  def change
    add_column :events, :name, :string
    remove_column :events, :type
  end
end
