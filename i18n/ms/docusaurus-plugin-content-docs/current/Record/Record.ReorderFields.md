---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Menyusun semula medan yang ditentukan kepada susunan baru.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan rekod selepas menyusun semula medan dalam <code>record</code> dalam susunan medan yang ditentukan dalam senarai <code>fieldOrder</code>. Nilai medan dikekalkan dan medan yang tidak disenaraikan dalam <code>fieldOrder</code> ditinggalkan di kedudukan asalnya.


## Examples

### Example #1 
Susun semula beberapa medan dalam rekod.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
