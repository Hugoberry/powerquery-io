---
title: List.RemoveRange
---

# List.RemoveRange


Eltávolít megadott számú értéket a megadott pozíciótól kezdődően.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Eltávolít `count` értéket a(z) `list` listáról a megadott `index` pozíciótól kezdődően.


## Examples

### Example #1
3 érték eltávolítása az \{1, 2, 3, 4, -6, -2, -1, 5\} listáról a 4-es indextől kezdődően
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
