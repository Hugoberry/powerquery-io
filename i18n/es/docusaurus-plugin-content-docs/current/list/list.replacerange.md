---
title: List.ReplaceRange
---

# List.ReplaceRange


Sustituye el número de recuento de valores a partir de la posición con los valores de reemplazo.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Reemplaza los valores `count` de `list` con la lista `replaceWith`, a partir de la posición especificada, `index`.


## Examples

### Example #1
Reemplazar \{7, 8, 9\} en la lista \{1, 2, 7, 8, 9, 5\} por \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
