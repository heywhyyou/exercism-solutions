package techpalace

import "strings"

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return "Welcome to the Tech Palace, " + strings.ToUpper(customer)
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	var fanciness string = strings.Repeat("*", numStarsPerLine)
	return string(fanciness + "\n" + welcomeMsg + "\n" +fanciness)
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	replaced := strings.ReplaceAll(oldMsg, "*", "")
	return strings.TrimSpace(replaced)
}
