---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Vraća funkciju koja deli tekst na listu teksta kod svakog navedenog položaja.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta kod svakog navedenog položaja.


## Examples

### Example #1 
Razdelite unos na navedenim pozicijama, počevši od početka unosa.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Razdelite unos na navedenim pozicijama, počevši od kraja unosa.
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
