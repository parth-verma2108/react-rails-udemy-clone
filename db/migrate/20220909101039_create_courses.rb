class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :duration
      t.string :type
      t.date :issue_date

      t.timestamps
    end
  end
end
