---
title: Record.FromList
---

# Record.FromList


Mengembalikan rekod jika senarai nilai medan dan set medan ditentukan.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Mengembalikan rekod jika `list` nilai medan dan set medan ditentukan. `fields` boleh ditentukan sama ada oleh senarai nilai teks atau jenis rekod. Ralat akan dipaparkan jika medan tidak unik.


## Examples

### Example #1
Bina rekod daripada senarai nilai medan dan senarai nama medan.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Bina rekod daripada senarai nilai medan dan jenis rekod.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
