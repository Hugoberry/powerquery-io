---
title: List.Select
---

# List.Select


## Description

Devolve uma lista de valores que correspondem à condição.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Devolve uma lista de valores da lista <code>list</code> que correspondem à condição selecionada <code>selection</code>.


## Examples

### Example #1 
Determinar os valores existentes na lista \{1, -3, 4, 9, -2} que são maiores que 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
