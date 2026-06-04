---
title: Record.Field
---

# Record.Field


Mengembalikan nilai bagi medan yang ditentukan dalam rekod.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Mengembalikan nilai bagi `field` yang ditentukan dalam `record`. Jika medan tidak ditemui, ralat akan dipaparkan.


## Examples

### Example #1
Cari nilai medan "CustomerID" dalam rekod.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
