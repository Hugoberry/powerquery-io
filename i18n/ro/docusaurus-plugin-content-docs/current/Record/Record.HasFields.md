---
title: Record.HasFields
---

# Record.HasFields


## Description

Indică dacă înregistrarea conţine câmpuri specificate.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indică dacă înregistrarea <code>record</code> are câmpurile specificate în <code>fields</code>, returnând o valoare logică (true sau false).    Mai multe valori pentru câmp pot fi specificate utilizând o listă.


## Examples

### Example #1 
Verificați dacă înregistrarea conține câmpul „IDClient”.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Verificați dacă înregistrarea conține câmpul „IDClient” și „Adresă”.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
