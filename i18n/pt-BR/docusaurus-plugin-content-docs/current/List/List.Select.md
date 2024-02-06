---
title: List.Select
---

# List.Select


Retorna uma lista de valores correspondentes à condição.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Retorna uma lista de valores da lista <code>list</code>, que corresponde à condição de seleção <code>selection</code>.


## Examples

### Example #1 
Localize os valores da lista \{1, -3, 4, 9, -2} que sejam maiores que 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
