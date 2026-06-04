---
title: Record.FromList
---

# Record.FromList


Menghasilkan data berdasarkan daftar nilai bidang dan himpunan bidang.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Menghasilkan data berdasarkan `list` nilai bidang dan himpunan bidang. `fields` dapat ditetapkan dengan daftar nilai teks atau jenis data. Kesalahan akan muncul jika bidang tidak unik.


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
