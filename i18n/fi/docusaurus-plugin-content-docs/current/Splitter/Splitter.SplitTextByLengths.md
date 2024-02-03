---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin määritetyn pituuden mukaisesti.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin määritetyn pituuden mukaisesti.


## Examples

### Example #1 
Jaa syöte kahteen ensimmäiseen merkkiin ja sen jälkeen seuraavaan kolmeen merkkiin syötteen alusta alkaen.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Jaa syöte kolmeen ensimmäiseen merkkiin ja sen jälkeen kahteen seuraavaan merkkiin syötteen lopusta alkaen.
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
