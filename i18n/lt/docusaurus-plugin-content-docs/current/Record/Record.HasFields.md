---
title: Record.HasFields
---

# Record.HasFields


## Description

Nurodoma, ar įraše yra nurodyti laukai.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Nurodoma, ar įraše <code>record</code> yra laukai, nurodyti <code>fields</code>, pateikiant loginę reikšmę (teisinga arba klaidinga).    Naudojant sąrašą, galima nurodyti kelias laukų reikšmes.


## Examples

### Example #1 
Patikrinkite, ar įraše yra laukas Kliento ID.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Patikrinkite, ar įraše yra laukai „CustomerID“ ir „Address“.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
