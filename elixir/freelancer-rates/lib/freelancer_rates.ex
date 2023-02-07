defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8.0
  end

  def apply_discount(before_discount, discount) do
    after_discount = before_discount * (discount / 100)
    before_discount - after_discount
  end

  def monthly_rate(hourly_rate, discount) do
    before_discount = daily_rate(hourly_rate) * 22
    trunc(ceil(apply_discount(before_discount, discount)))
  end

  def days_in_budget(budget, hourly_rate, discount) do
    discounted_daily_rate = apply_discount(daily_rate(hourly_rate), discount)
    discounted_budget = budget / discounted_daily_rate
    Float.floor(discounted_budget, 1)
  end
end
