---
title: Record.Field
---

# Record.Field


## Description

Menghasilkan nilai bidang yang ditetapkan dalam data.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Menghasilkan nilai <code>field</code> yang ditetapkan dalam <code>record</code>. Jika bidang tidak ditemukan, pengecualian akan dibuat.


## Examples

### Example #1 
Mencari nilai bidang &#34;CustomerID&#34; dalam data.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
