---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Vráti funkciu, ktorá kombinuje zoznam textu pomocou stanovených pozícií a dĺžok.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Vráti funkciu, ktorá kombinuje zoznam textových hodnôt do jednej textovej hodnoty pomocou stanovených výstupných pozícií a dĺžok. Dĺžka null označuje, že by sa mala zahrnúť celá textová hodnota.


## Examples

### Example #1 
Skombinujte zoznam textových hodnôt pomocou stanovených výstupných pozícií a dĺžok.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
