---
title: List.Buffer
---

# List.Buffer


## Description

Uloží seznam do vyrovnávací paměti.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Uloží seznam <code>list</code> do vyrovnávací paměti. Výsledkem tohoto volání je stabilní seznam.


## Examples

### Example #1 
Vytvoří stabilní kopii seznamu \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
