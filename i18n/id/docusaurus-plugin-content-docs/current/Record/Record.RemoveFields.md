---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Menghapus bidang yang ditetapkan dari data input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Menghasilkan data yang menghapus semua bidang yang ditetapkan dalam <code>fields</code> dari input <code>record</code>. Jika bidang yang ditetapkan tidak ada, pengecualian akan dibuat.


## Examples

### Example #1 
Menghapus bidang &#34;Price&#34; dari data.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Menghapus bidang &#34;Price&#34; dan &#34;Item&#34; dari data.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
