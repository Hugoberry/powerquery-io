---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Returnerar en funktion som delar upp text i en lista med text vid varje angiven position.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text vid varje angiven position.


## Examples

### Example #1 
Dela indata vid de angivna positionerna med början från starten av indata.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Dela indata vid de angivna positionerna, med början från slutet av indata.
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
