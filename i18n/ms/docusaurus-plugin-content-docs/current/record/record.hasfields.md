---
title: Record.HasFields
---

# Record.HasFields


Menunjukkan sama ada rekod mempunyai medan yang ditentukan.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Menunjukkan sama ada rekod `record` mempunyai medan ditentukan dalam `fields`, dengan mengembalikan nilai logik (benar atau palsu). Berbilang nilai medan boleh ditentukan menggunakan senarai.


## Examples

### Example #1
Semak sama ada rekod mempunyai medan "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Semak sama ada rekod mempunyai medan "CustomerID" dan "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
