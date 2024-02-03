---
title: List.Transform
---

# List.Transform


## Description

Vrne nov seznam vrednosti, izračunanih iz tega seznama.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Vrne nov seznam vrednosti, tako da uporabi funkcijo pretvorbe <code>transform</code> za seznam, <code>list</code>.


## Examples

### Example #1 
Dodajte 1 vsaki vrednosti na seznamu \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
