---
title: List.IsEmpty
---

# List.IsEmpty


Menghasilkan benar jika daftar kosong.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Menghasilkan `true` jika daftar, `list`, tidak berisi nilai (panjang 0). Jika daftar berisi nilai (panjang > 0), `false` akan dihasilkan.


## Examples

### Example #1
Mencari jika daftar \{\} kosong.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Mencari jika daftar \{1, 2\} kosong.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
