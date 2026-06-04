---
title: Record.RemoveFields
---

# Record.RemoveFields


Menghapus bidang yang ditetapkan dari data input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Menghasilkan data yang menghapus semua bidang yang ditetapkan dalam `fields` dari input `record`. Jika bidang yang ditentukan tidak ada, kesalahan akan muncul.


## Examples

### Example #1
Menghapus bidang "Price" dari data.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Menghapus bidang "Price" dan "Item" dari data.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
