---
title: List.Single
---

# List.Single


## Description

Menghasilkan satu item daftar untuk daftar dengan panjang satu, atau jika sebaliknya, membuat pengecualian.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Jika hanya terdapat satu item dalam daftar <code>list</code>, item tersebut akan dihasilkan.    Jika terdapat lebih dari satu item atau daftar kosong, fungsi akan membuat pengecualian.


## Examples

### Example #1 
Mencari nilai tunggal dalam daftar \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Mencari nilai tunggal dalam daftar \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
