---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Menunjukkan apakah terdapat duplikat dalam daftar.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Menghasilkan nilai logika apakah terdapat duplikat dalam daftar <code>list</code>; <code>true</code> jika daftar berbeda, <code>false</code> jika terdapat nilai duplikat. 


## Examples

### Example #1 
Mencari jika daftar \{1, 2, 3} berbeda (misalnya, tidak ada duplikat).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Mencari jika daftar \{1, 2, 3, 3} berbeda (misalnya, tidak ada duplikat).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
