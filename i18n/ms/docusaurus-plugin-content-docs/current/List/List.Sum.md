---
title: List.Sum
---

# List.Sum


## Description

Mengembalikan jumlah item dalam senarai.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Mengembalikan jumlah nilai bukan nol dalam senarai, <code>list</code>.  Mengembalikan nombor jika terdapat nilai bukan nol dalam senarai.


## Examples

### Example #1 
Cari jumlah nombor dalam senarai &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
