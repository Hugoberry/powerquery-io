---
title: List.Distinct
---

# List.Distinct


## Description

Devolve uma lista de valores com os duplicados removidos.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve uma lista que contém todos os valores existentes na lista <code>list</code> com os duplicados removidos. Se a lista estiver vazia, o resultado será uma lista vazia.


## Examples

### Example #1 
Remover os duplicados da lista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
