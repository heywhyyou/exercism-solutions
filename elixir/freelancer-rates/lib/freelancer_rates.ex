defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8
  end

  def apply_discount(before_discount, discount) do
    before_discount - discount
  end

  def monthly_rate(hourly_rate, discount) do
    daily_rate(hourly_rate) * 22 - discount
  end

  def days_in_budget(budget, hourly_rate, discount) do
    # Please implement the days_in_budget/3 function
  end
end
