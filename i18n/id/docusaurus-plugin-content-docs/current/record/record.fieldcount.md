---
title: Record.FieldCount
---

# Record.FieldCount


Menghasilkan jumlah bidang dalam data.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Menghasilkan jumlah bidang dalam data `record`.


## Examples

### Example #1
Mencari jumlah bidang dalam data.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
