---
title: List.Distinct
---

# List.Distinct


## Description

Retorna uma lista de valores com as duplicatas removidas.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Retorna uma lista que contém todos os valores na lista <code>list</code> com as duplicatas removidas. Se a lista estiver vazia, o resultado será uma lista vazia.


## Examples

### Example #1 
Remova as duplicatas da lista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
