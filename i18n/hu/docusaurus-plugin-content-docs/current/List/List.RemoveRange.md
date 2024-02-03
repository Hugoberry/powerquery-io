---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Eltávolít megadott számú értéket a megadott pozíciótól kezdődően.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Eltávolít <code>count</code> értéket a(z) <code>list</code> listáról a megadott <code>index</code> pozíciótól kezdődően.


## Examples

### Example #1 
3 érték eltávolítása az \{1, 2, 3, 4, -6, -2, -1, 5} listáról a 4-es indextől kezdődően
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
