---
title: List.IsDistinct
---

# List.IsDistinct


Menunjukkan apakah terdapat duplikat dalam daftar.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menghasilkan nilai logika apakah terdapat duplikat dalam daftar `list`; `true` jika daftar berbeda, `false` jika terdapat nilai duplikat.


## Examples

### Example #1
Mencari jika daftar \{1, 2, 3\} berbeda (misalnya, tidak ada duplikat).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Mencari jika daftar \{1, 2, 3, 3\} berbeda (misalnya, tidak ada duplikat).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
