---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


Retourneert een functie die tekst splitst in een lijst met tekst conform de opgegeven verschuivingen en lengten.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourneert een functie die tekst splitst in een lijst met tekst volgens de opgegeven verschuivingen en lengten. Een null-lengte geeft aan dat alle resterende invoer moet worden opgenomen.


## Examples

### Example #1 
Splits de invoer op basis van de opgegeven positie- en lengteparen, te beginnen bij het begin van de invoer. De bereiken in dit voorbeeld overlappen elkaar.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Splits de invoer op basis van de opgegeven positie- en lengteparen, te beginnen bij het einde van de invoer.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Splits de invoer in een postcode met vaste lengte, gevolgd door een plaatsnaam met variabele lengte.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
