---
title: List.Distinct
---

# List.Distinct


## Description

Devolve unha lista de valores con os duplicados eliminados.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve unha lista que contén todos os valores da lista <code>list</code> con os duplicados eliminados. Se a lista está baleira, o resultado é unha lista baleira.


## Examples

### Example #1 
Elimine os duplicados da lista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
