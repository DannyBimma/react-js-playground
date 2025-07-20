/*Copyright (c) 2025 DannyBimma. All Rights Reserved.
 *
 * The Temp Conversion ANSI-C Program Translated to JS
 *
 */

function main() {
  const increment = 3.0;
  const lowerBound = 0.0;
  const upperBound = 300.0;

  // Output heading
  console.log("CELSIUS TO FAHRENHEIT TABLE");
  console.log("");

  for (let c = lowerBound; c <= upperBound; c += increment) {
    celsiusToFahrenheit(c);
  }
}

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9.0) / 5.0 + 32.0;

  console.log(
    `${celsius.toString().padStart(3)} c\t=\t${fahrenheit.toFixed(1).padStart(6)} f`,
  );

  return fahrenheit;
}

main();
