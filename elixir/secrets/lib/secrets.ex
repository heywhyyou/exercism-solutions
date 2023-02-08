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
    # Please implement the secret_divide/1 function
  end

  def secret_and(secret) do
    # Please implement the secret_and/1 function
  end

  def secret_xor(secret) do
    # Please implement the secret_xor/1 function
  end

  def secret_combine(secret_function1, secret_function2) do
    # Please implement the secret_combine/2 function
  end
end
