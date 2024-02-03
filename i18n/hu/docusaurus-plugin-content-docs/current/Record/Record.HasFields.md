---
title: Record.HasFields
---

# Record.HasFields


## Description

Azt jelzi, hogy a rekord tartalmazza-e a megadott mezőket.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Egy logikai érték (igaz vagy hamis) visszaadásával jelzi, hogy a(z) <code>record</code> rekord tartalmazza-e a(z) <code>fields</code> által megadott mezőket.    Lista használatával több mezőérték is megadható.


## Examples

### Example #1 
Ellenőrzi, hogy a rekord tartalmazza-e a CustomerID mezőt.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Ellenőrzi, hogy a rekord tartalmazza-e a CustomerID és az Address mezőt.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
