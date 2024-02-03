---
title: Record.HasFields
---

# Record.HasFields


## Description

Anger om posten innehåller angivna fält.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Anger om posten <code>record</code> innehåller fälten som anges i <code>fields</code> genom att returnera ett logiskt värde (true eller false).    Flera fältvärden kan anges med hjälp av en lista.


## Examples

### Example #1 
Kontrollera om posten innehåller fältet CustomerID.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om posten innehåller fälten CustomerID och Address.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
