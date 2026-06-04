---
title: List.IsEmpty
---

# List.IsEmpty


Mengembalikan benar jika senarai adalah kosong.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Mengembalikan `true` jika senarai, `list`, tidak mengandungi nilai (panjang 0). Jika senarai mengandungi nilai (panjang > 0), mengembalikan `false`.


## Examples

### Example #1
Cari sama ada senarai \{\} adalah kosong.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Cari sama ada senarai \{1, 2\} adalah kosong.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
