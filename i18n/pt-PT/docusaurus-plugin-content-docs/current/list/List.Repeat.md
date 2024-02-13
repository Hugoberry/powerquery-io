---
title: List.Repeat
---

# List.Repeat


Devolve uma lista que é uma contagem de repetições da lista original.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Devolve uma lista que é <code>count</code> repetições da lista original, <code>list</code>.


## Examples

### Example #1 
Criar uma lista que tem \{1, 2} repetido 3 vezes.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
