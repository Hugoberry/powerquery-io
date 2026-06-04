---
title: Record.Field
---

# Record.Field


Menghasilkan nilai bidang yang ditetapkan dalam data.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Menghasilkan nilai `field` yang ditetapkan dalam `record`. Jika bidang tidak ditemukan, kesalahan akan muncul.


## Examples

### Example #1
Mencari nilai bidang "CustomerID" dalam data.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
