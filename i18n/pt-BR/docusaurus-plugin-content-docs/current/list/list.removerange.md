---
title: List.RemoveRange
---

# List.RemoveRange


Remove o número de contagem de valores começando na posição especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Remove os valores <code>count</code> na <code>list</code> começando na posição especificada, <code>index</code>.


## Examples

### Example #1 
Remova três valores na lista \{1, 2, 3, 4, -6, -2, -1, 5} começando no índice. 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
