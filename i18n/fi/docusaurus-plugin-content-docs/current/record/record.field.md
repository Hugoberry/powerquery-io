---
title: Record.Field
---

# Record.Field


Palauttaa tietueen määritetyn kentän arvon.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Palauttaa kohteen `field` määritetyn kohteen `record` arvon. Jos kenttää ei löydy, ilmenee virhe.


## Examples

### Example #1
Selvitä kentän CustomerID arvo tietueessa.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
