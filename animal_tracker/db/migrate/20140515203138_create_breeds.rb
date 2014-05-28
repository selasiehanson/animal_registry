class CreateBreeds < ActiveRecord::Migration
  def change
    create_table :breeds do |t|
      t.string :name
      t.references :animal, index: true

      t.timestamps
    end
  end
end
