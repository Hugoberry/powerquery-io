---
title: Record.HasFields
---

# Record.HasFields


Angiver, om posten indeholder angivne felter.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Angiver, om posten `record` indeholder de felter, der er angivet i `fields`, ved at returnere en logisk værdi (true eller false). Der kan angives flere feltværdier ved hjælp af en liste.


## Examples

### Example #1
Kontrollér, om posten indeholder feltet "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Kontrollér, om posten indeholder feltet "CustomerID" og "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
