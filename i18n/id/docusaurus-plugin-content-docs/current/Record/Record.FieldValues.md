---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Menghasilkan daftar nilai bidang.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Menghasilkan daftar nilai bidang dalam data <code>record</code>.


## Examples

### Example #1 
Mencari nilai bidang dalam data.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
