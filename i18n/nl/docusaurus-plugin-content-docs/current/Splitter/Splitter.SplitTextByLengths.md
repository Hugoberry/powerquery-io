---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Retourneert een functie die bij elke opgegeven lengte tekst splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Retourneert een functie die bij elke opgegeven lengte tekst splitst in een lijst met tekst.


## Examples

### Example #1 
Splits de invoer in de eerste twee tekens, gevolgd door de volgende drie, te beginnen bij het begin van de invoer.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Splits de invoer in de eerste drie tekens, gevolgd door de volgende twee, te beginnen bij het einde van de invoer.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
