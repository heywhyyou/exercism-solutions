defmodule Secrets do
  def secret_add(secret) do
    fn add_this ->
      add_this + secret
    end
  end

  def secret_subtract(secret) do
    fn sub_this ->
      sub_this - secret
    end
  end

  def secret_multiply(secret) do
    fn mul_this ->
      mul_this * secret
    end
  end

  def secret_divide(secret) do
    fn div_this ->
      div(div_this, secret)
    end
  end

  def secret_and(secret) do
    fn ander ->
    Bitwise.band(ander, secret)
    end
  end

  def secret_xor(secret) do
    fn xor_this ->
      Bitwise.bxor(xor_this, secret)
    end
  end

  def secret_combine(secret_function1, secret_function2) do
    fn take_this ->
      secret_function2.(secret_function1.(take_this))
    end
  end
end
