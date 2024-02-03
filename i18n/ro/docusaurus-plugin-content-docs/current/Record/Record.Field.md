---
title: Record.Field
---

# Record.Field


## Description

Returnează valoarea câmpului specificat într-o înregistrare.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Returnează valoarea <code>field</code> specificată în <code>record</code>. Dacă nu se găseşte câmpul, apare o excepţie.


## Examples

### Example #1 
Găsiți valoarea câmpului „IDClient” în înregistrare.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
