---
title: Record.AddField
---

# Record.AddField


## Description

Menambah medan pada rekod.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Details

Menambah medan pada rekod <code>record</code>, jika nama medan <code>fieldName</code> dan nilai <code>value</code> ditentukan.


## Examples

### Example #1 
Tambahkan medan Alamat ke rekod.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
