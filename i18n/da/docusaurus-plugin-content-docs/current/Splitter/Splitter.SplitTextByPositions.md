---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne placeringer.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne placeringer.


## Examples

### Example #1 
Opdel input på de angivne positioner, startende fra begyndelsen af input.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Opdel input på de angivne positioner, startende fra slutningen af input.
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
