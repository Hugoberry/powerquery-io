---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Substitui o número de contagem de valores começando na posição com os valores de substituição.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Substitui os valores <code>count</code> na <code>list</code> pela lista <code>replaceWith</code>, começando na posição especificada, <code>index</code>.


## Examples

### Example #1 
Substitua \{7, 8, 9} na lista \{1, 2, 7, 8, 9, 5} por \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
