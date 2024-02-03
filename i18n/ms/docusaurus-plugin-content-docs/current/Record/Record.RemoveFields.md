---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Mengalih keluar medan yang ditentukan daripada rekod input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan rekod yang mengalih keluar semua medan yang ditentukan dalam senarai <code>fields</code> daripada input <code>record</code>. Jika medan yang ditentukan tidak wujud, pengecualian dikembalikan.


## Examples

### Example #1 
Alih keluarkan medan &#34;Price&#34; daripada rekod.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Alih keluarkan medan &#34;Price&#34; dan &#34;Item&#34; daripada rekod.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
