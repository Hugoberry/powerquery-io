---
title: Record.Field
---

# Record.Field


Vraća vrednost navedenog polja u zapisu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Vraća vrednost navedenog `field` u `record`. Ako se polje ne pronađe, prijavljuje se greška.


## Examples

### Example #1
Pronalaženje vrednosti polja „IDKupca“ u zapisu.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
