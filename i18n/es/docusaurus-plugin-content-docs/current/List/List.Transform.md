---
title: List.Transform
---

# List.Transform


## Description

Devuelve una nueva lista de los valores calculados a partir de esta lista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Devuelve una nueva lista de valores aplicando la función de transformación <code>transform</code> a la lista <code>list</code>.


## Examples

### Example #1 
Sumar 1 a cada valor de la lista \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
