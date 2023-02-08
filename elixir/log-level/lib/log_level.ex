defmodule LogLevel do
  def to_label(level, legacy?) do
    cond do
      level == 0 and not legacy? -> :trace
      true -> :unknown
    end
  end

  def alert_recipient(level, legacy?) do
    # Please implement the alert_recipient/2 function
  end
end
