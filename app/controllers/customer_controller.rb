class CustomerController < ApplicationController
  def index
    @customers = Customer.all.order(created_at: :desc)
  end

  def create
    @customer = Customer.create!(customer_params)
    if customer
       @@customer
    else
       @customer.errors
    end
  end

  def show
    if @customer
       @customer
    else
       @customer.errors
    end
  end

  def destroy
    @customer&.destroy
  end

  private

  def customer_params
    params.permit(:name, :email)
  end

  def customer
    @customer ||= Customer.find(params[:id])
  end
end