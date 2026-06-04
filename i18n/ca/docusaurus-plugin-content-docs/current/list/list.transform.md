---
title: List.Transform
---

# List.Transform


Retorna una llista nova dels valors computats a partir d'aquesta llista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Retorna una llista nova de valors aplicant la funció de transformació `transform` a la llista, `list`.


## Examples

### Example #1
Afegeix 1 a cada valor de la llista \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
