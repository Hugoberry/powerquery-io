---
title: Record.AddField
---

# Record.AddField


Menambahkan bidang ke data.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Menambahkan bidang ke data `record`, dengan nama bidang `fieldName` dan nilai `value`.


## Examples

### Example #1
Menambahkan bidang Alamat ke data.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
