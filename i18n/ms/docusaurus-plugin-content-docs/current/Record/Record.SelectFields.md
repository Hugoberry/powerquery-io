---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Mengembalikan rekod yang mengandungi medan yang ditentukan sahaja.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan rekod yang termasuk medan yang ditentukan sahaja dalam senarai <code>fields</code> daripada input <code>record</code>.


## Examples

### Example #1 
Pilih medan &#34;Item&#34; dan &#34;Price&#34; dalam rekod.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
