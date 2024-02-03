---
title: List.Transform
---

# List.Transform


## Description

Retorna una llista nova dels valors computats a partir d&#39;aquesta llista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Retorna una llista nova de valors aplicant la funció de transformació <code>transform</code> a la llista, <code>list</code>.


## Examples

### Example #1 
Afegeix 1 a cada valor de la llista \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
