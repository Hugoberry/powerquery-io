---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Retourneert een functie die op elke opgegeven positie tekst splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourneert een functie die op elke opgegeven positie tekst splitst in een lijst met tekst.


## Examples

### Example #1 
Splits de invoer op de opgegeven posities, te beginnen bij het begin van de invoer.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Splits de invoer op de opgegeven posities, te beginnen bij het einde van de invoer.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
