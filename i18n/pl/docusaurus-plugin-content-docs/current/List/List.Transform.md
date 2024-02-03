---
title: List.Transform
---

# List.Transform


## Description

Zwraca nową listę wartości obliczonych na podstawie tej listy.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Zwraca nową listę wartości, stosując funkcję przekształcenia <code>transform</code> do listy <code>list</code>.


## Examples

### Example #1 
Dodaj 1 do każdej wartości na liście \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
