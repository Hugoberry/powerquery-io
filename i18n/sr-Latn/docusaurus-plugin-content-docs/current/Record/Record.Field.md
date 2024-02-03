---
title: Record.Field
---

# Record.Field


## Description

Vraća vrednost navedenog polja u zapisu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Vraća vrednost navedenog <code>field</code> u <code>record</code>. Ako se polje ne pronađe, vraća se izuzetak.


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
