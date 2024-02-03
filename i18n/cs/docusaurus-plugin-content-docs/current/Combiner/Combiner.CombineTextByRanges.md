---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Vrátí funkci, která kombinuje seznam textu pomocí zadaných pozic a délek.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Vrátí funkci, která sloučí seznam textových hodnot do jedné textové hodnoty pomocí zadaných výstupních pozic a délek. Délka s hodnotou null označuje, že by měla být zahrnuta celá textová hodnota.


## Examples

### Example #1 
Zkombinujte seznam textových hodnot pomocí zadaných výstupních pozic a délek.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
