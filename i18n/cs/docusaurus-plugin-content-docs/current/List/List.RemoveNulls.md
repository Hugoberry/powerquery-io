---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Odebere ze zadaného seznamu všechny hodnoty null.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Odebere všechny výskyty hodnot null ze seznamu <code>list</code>. Pokud seznam neobsahuje žádné hodnoty null, je vrácen původní seznam.


## Examples

### Example #1 
Odebere ze seznamu \{1, 2, 3, null, 4, 5, null, 6} všechny hodnoty null.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
