---
title: List.Repeat
---

# List.Repeat


Retorna uma lista que representa as repetições de contagem da lista original.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Retorna uma lista que representa as repetições de <code>count</code> da lista original, <code>list</code>.


## Examples

### Example #1 
Criar uma lista que tenha 3 repetições de \{1, 2}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
