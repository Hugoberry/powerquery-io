---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Menghasilkan nilai bidang yang ditetapkan dalam data atau nilai default jika bidang tidak ditemukan.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Menghasilkan nilai bidang <code>field</code> yang ditetapkan dalam data <code>record</code>. Jika bidang tidak ditemukan, <code>defaultValue</code> opsional akan dihasilkan.


## Examples

### Example #1 
Mencari nilai bidang &#34;Phone&#34; dalam data, atau mengembalikan null jika tidak ada.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Mencari nilai bidang &#34;Phone&#34; dalam data, atau mengembalikan default jika tidak ada.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
