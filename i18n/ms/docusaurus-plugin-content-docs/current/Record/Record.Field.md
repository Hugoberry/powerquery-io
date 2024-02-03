---
title: Record.Field
---

# Record.Field


## Description

Mengembalikan nilai bagi medan yang ditentukan dalam rekod.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Mengembalikan nilai bagi <code>field</code> yang ditentukan dalam <code>record</code>. Jika medan tidak ditemui, pengecualian dikembalikan.


## Examples

### Example #1 
Cari nilai medan &#34;CustomerID&#34; dalam rekod.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
