---
title: List.Single
---

# List.Single


Mengembalikan satu item daftar untuk daftar dengan panjang satu. Jika tidak, kesalahan akan muncul.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Jika hanya terdapat satu item dalam daftar `list`, item tersebut akan dihasilkan. Jika ada lebih dari satu item atau daftar kosong, fungsi akan menimbulkan kesalahan.


## Examples

### Example #1
Mencari nilai tunggal dalam daftar \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Mencari nilai tunggal dalam daftar \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
