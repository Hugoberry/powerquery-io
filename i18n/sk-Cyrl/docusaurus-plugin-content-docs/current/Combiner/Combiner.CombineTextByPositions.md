---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Vráti funkciu, ktorá kombinuje zoznam textu pomocou stanovených výstupných pozícií.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Vráti funkciu, ktorá kombinuje zoznam textových hodnôt do jednej textovej hodnoty pomocou stanovených výstupných pozícií.


## Examples

### Example #1 
Skombinujte zoznam textových hodnôt ich umiestnením do výstupu na stanovených pozíciách.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
