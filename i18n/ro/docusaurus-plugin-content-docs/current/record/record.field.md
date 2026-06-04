---
title: Record.Field
---

# Record.Field


Returnează valoarea câmpului specificat într-o înregistrare.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Returnează valoarea `field` specificată în `record`. Dacă nu se găsește câmpul, se generează o eroare.


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
