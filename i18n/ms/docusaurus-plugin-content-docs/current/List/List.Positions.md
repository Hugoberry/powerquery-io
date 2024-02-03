---
title: List.Positions
---

# List.Positions


## Description

Mengembalikan senarai ofset untuk input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Mengembalikan senarai ofset untuk senarai input <code>list</code>.    Apabila menggunakan List.Transform untuk menukar senarai, senarai kedudukan boleh digunakan untuk memberi akses transformasi kepada kedudukan.


## Examples

### Example #1 
Cari ofset nilai dalam senarai \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
