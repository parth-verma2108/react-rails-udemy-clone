class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  enum user_role: {Instructor: "Instructor", Student: "Student"}
  scope :instructor, -> { where(role: 'instructor') } #not understood
  scope :student, -> { where(role: 'student') }
end
