class Api::V1::CoursesController < ApplicationController
	before_action :set_course, only: [:show, :edit, :update, :destroy]

  # GET /courses
  # GET /courses.json
  def index
    @courses = Course.all
    render json: @courses
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
    if @course
      render json: @course
    else
      render json: @course.errors
    end
  end

  # GET /courses/new
  def new
    @course = Course.new
  end

  # GET /courses/1/edit
  def edit
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = Course.new(course_params)


    if @course.save
      render json: @course
    else
      render json: @course.errors
    end
  end

  # PATCH/PUT /courses/1
  # PATCH/PUT /courses/1.json
  def update
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course.destroy

    render json: { notice: 'Course was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def course_params
      params.permit(:name, :description, :price, :duration, :type, :issue_date)
    end
end
