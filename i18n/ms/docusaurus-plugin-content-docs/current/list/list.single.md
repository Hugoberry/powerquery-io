---
title: List.Single
---

# List.Single


Mengembalikan satu item senarai untuk senarai dengan panjang satu, sebaliknya akan memaparkan ralat.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Jika hanya terdapat satu item dalam senarai `list`, mengembalikan item tersebut. Jika terdapat lebih daripada satu item atau senarai adalah kosong, fungsi akan memaparkan ralat.


## Examples

### Example #1
Cari nilai tunggal dalam senarai \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Cari nilai tunggal dalam senarai \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
