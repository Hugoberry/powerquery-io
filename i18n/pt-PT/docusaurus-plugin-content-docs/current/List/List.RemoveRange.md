---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Remove o número da contagem de valores a partir da posição especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Remove os valores <code>count</code> em <code>list</code> a partir da posição especificada, <code>index</code>.


## Examples

### Example #1 
Remover os valores 3 na lista \{1, 2, 3, 4, -6, -2, -1, 5} a partir do índice 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
