// Package weather is a collection of forecast related source files.
package weather 

// CurrentCondition stores the value of current condition of defined location.
var CurrentCondition string 
// CurrentLocation stores the name of the current location.
var CurrentLocation string 

// Forecast function makes the forecast happen.
func Forecast(city, condition string) string {  
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
} 
