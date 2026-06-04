---
title: List.Repeat
---

# List.Repeat


Menghasilkan daftar yang merupakan pengulangan jumlah daftar asli.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Menghasilkan daftar yang merupakan pengulangan `count` daftar asli, `list`.


## Examples

### Example #1
Membuat daftar dengan \{1, 2\} diulang 3 kali.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
