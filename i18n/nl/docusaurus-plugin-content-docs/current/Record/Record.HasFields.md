---
title: Record.HasFields
---

# Record.HasFields


## Description

Geeft aan of de opgegeven velden in de record staan.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Geeft aan of in de record <code>record</code> de velden staan die zijn opgegeven in <code>fields</code>, door een logische waarde (true of false) te retourneren.    Er kunnen met behulp van een lijst meerdere veldwaarden worden opgegeven.


## Examples

### Example #1 
Controleren of in de record CustomerID voorkomt.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Controleren of in de record de velden CustomerID en Address voorkomen.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
