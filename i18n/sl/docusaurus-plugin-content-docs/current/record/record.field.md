---
title: Record.Field
---

# Record.Field


Vrne vrednost navedenega polja v zapisu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Vrne vrednost navedenega polja `field` v zapisu `record`. Če polja ni mogoče najti, pride do napake.


## Examples

### Example #1
Poiščite vrednost polja"IDStranke"v zapisu.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
