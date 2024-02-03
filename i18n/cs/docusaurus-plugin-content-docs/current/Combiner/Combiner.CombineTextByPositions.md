---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Vrátí funkci, která kombinuje seznam textu pomocí zadaných výstupních pozic.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Vrátí funkci, která sloučí seznam textových hodnot do jedné textové hodnoty pomocí zadaných výstupních pozic.


## Examples

### Example #1 
Zkombinujte seznam textových hodnot jejich umístěním do výstupu na zadaných pozicích.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
