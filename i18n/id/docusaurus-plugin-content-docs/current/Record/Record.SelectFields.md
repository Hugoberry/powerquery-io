---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Menghasilkan data yang hanya berisi bidang yang ditetapkan.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Menghasilkan data yang hanya mencakup bidang yang ditetapkan dalam daftar <code>fields</code> dari input <code>record</code>.


## Examples

### Example #1 
Memilih bidang &#34;Item&#34; dan &#34;Price&#34; dalam data.
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
