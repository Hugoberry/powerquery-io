---
title: List.ReplaceRange
---

# List.ReplaceRange


Substitui o número da contagem de valores a partir da posição pelos valores de substituição.


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

Substitui os valores `count` em `list` pela lista `replaceWith`, a partir da posição especificada, `index`.


## Examples

### Example #1
Substituir \{7, 8, 9\} na lista \{1, 2, 7, 8, 9, 5\} por \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
