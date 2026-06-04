---
title: Record.HasFields
---

# Record.HasFields


Menunjukkan apakah data memiliki bidang yang ditetapkan.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Menunjukkan apakah data `record` memiliki bidang yang ditetapkan dalam `fields`, dengan menghasilkan nilai logika (benar atau salah). Beberapa nilai bidang dapat ditetapkan menggunakan daftar.


## Examples

### Example #1
Memastikan data memiliki bidang "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Memastikan data memiliki bidang "CustomerID" dan "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
