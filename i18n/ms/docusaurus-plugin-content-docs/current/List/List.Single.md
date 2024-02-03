---
title: List.Single
---

# List.Single


## Description

Mengembalikan satu item senarai untuk senarai dengan panjang satu, sebaliknya mengembalikan pengecualian.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Jika hanya terdapat satu item dalam senarai <code>list</code>, mengembalikan item tersebut.    Jika terdapat lebih daripada satu item atau senarai adalah kosong, fungsi mengembalikan pengecualian.


## Examples

### Example #1 
Cari nilai tunggal dalam senarai \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Cari nilai tunggal dalam senarai \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
