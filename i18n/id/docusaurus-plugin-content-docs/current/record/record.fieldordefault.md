---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Menghasilkan nilai bidang yang ditetapkan dalam data atau nilai default jika bidang tidak ditemukan.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Menghasilkan nilai bidang `field` yang ditetapkan dalam data `record`. Jika bidang tidak ditemukan, `defaultValue` opsional akan dihasilkan.


## Examples

### Example #1
Mencari nilai bidang "Phone" dalam data, atau mengembalikan null jika tidak ada.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Mencari nilai bidang "Phone" dalam data, atau mengembalikan default jika tidak ada.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
