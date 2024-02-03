---
title: Record.Combine
---

# Record.Combine


## Description

Menggabungkan data dalam daftar tertentu.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Menggabungkan data dalam <code>records</code> tertentu. Jika <code>records</code> berisi nilai non-data, kesalahan dihasilkan.


## Examples

### Example #1 
Membuat data gabungan dari data.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
