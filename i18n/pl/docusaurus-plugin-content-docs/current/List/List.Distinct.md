---
title: List.Distinct
---

# List.Distinct


## Description

Zwraca listę wartości, z której zostały usunięte duplikaty.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Zwraca listę zawierającą wszystkie wartości z listy <code>list</code> po usunięciu duplikatów. Jeśli lista jest pusta, wynikiem jest pusta lista.


## Examples

### Example #1 
Usuń duplikaty z listy \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
