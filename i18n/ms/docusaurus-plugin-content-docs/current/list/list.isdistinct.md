---
title: List.IsDistinct
---

# List.IsDistinct


Menunjukkan sama ada terdapat pendua dalam senarai.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Mengembalikan nilai logik sama ada terdapat pendua dalam senarai `list`; `true` jika senarai unik, `false` jika terdapat nilai pendua.


## Examples

### Example #1
Ketahui sama ada senarai \{1, 2, 3\} adalah unik (iaitu. tiada pendua).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Ketahui sama ada senarai \{1, 2, 3, 3\} adalah unik (iaitu. tiada pendua).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
