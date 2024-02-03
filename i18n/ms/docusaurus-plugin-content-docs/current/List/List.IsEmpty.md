---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Mengembalikan benar jika senarai adalah kosong.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Mengembalikan <code>true</code> jika senarai, <code>list</code>, tidak mengandungi nilai (panjang 0). Jika senarai mengandungi nilai (panjang > 0), mengembalikan <code>false</code>.


## Examples

### Example #1 
Cari sama ada senarai \{} adalah kosong.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Cari sama ada senarai \{1, 2} adalah kosong.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
