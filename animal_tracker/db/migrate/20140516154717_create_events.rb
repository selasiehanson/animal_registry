class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :count
      t.string :type
      t.datetime :date
      t.integer :breed

      t.timestamps
    end
  end
end
