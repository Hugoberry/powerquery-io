---
title: List.Distinct
---

# List.Distinct


## Description

Értékek listáját adja vissza az ismétlődő értékek eltávolításával.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

A(z) <code>list</code> lista összes eleméből készülő listát ad vissza, az ismétlődő értékek eltávolításával. Ha a lista üres, az eredmény üres lista lesz.


## Examples

### Example #1 
Eltávolítja az ismétlődéseket az \{1, 1, 2, 3, 3, 3} listából.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
