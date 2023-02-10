defmodule LanguageList do
  def new() do
    []
  end

  def add(list, language) do
    [language | list]
  end

  def remove(list) do
    tl(list)
  end

  def first(list) do
    hd(list)
  end

  def count(list) do
    length(list)
  end

  def functional_list?(list) do
    # Please implement the functional_list?/1 function
  end
end
