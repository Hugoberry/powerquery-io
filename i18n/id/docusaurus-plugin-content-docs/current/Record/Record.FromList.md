---
title: Record.FromList
---

# Record.FromList


## Description

Menghasilkan data berdasarkan daftar nilai bidang dan himpunan bidang.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Menghasilkan data berdasarkan <code>list</code> nilai bidang dan himpunan bidang.  <code>fields</code> dapat ditetapkan dengan daftar nilai teks atau jenis data.  Pengecualian akan dibuat jika bidang tidak unik.


## Examples

### Example #1 
Membuat data dari daftar nilai bidang dan daftar nama bidang.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Membuat data dari daftar nilai bidang dan jenis data.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
