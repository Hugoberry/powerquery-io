---
title: Record.Field
---

# Record.Field


## Description

Palauttaa tietueen määritetyn kentän arvon.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Palauttaa kohteen <code>record</code> määritetyn kohteen <code>field</code> arvon. Jos kenttää ei löydy, tapahtuu poikkeus.


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
