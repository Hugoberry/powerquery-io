---
title: List.Transform
---

# List.Transform


## Description

Devolve unha nova lista de valores calculados dende esta lista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Devolve unha nova lista de valores aplicando a función de transformación <code>transform</code> á lista, <code>list</code>.


## Examples

### Example #1 
Engadir 1 a cada valor da lista \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
