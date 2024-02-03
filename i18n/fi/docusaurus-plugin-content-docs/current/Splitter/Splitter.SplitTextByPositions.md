---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin määritetyn sijainnin kohdalla.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin määritetyn sijainnin kohdalla.


## Examples

### Example #1 
Jaa syöte määritetyissä sijainnissa syötteen alusta alkaen.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Jaa syöte määritetyn sijainnin ja pituusparin mukaan syötteen lopusta alkaen.
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
