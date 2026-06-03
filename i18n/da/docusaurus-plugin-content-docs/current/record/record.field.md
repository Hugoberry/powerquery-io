---
title: Record.Field
---

# Record.Field


Returnerer værdien for det angivne felt i en post.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Returnerer værdien for det angivne felt `field` i posten `record`. Hvis feltet ikke findes, udløses der en fejl.


## Examples

### Example #1
Find værdien for feltet "CustomerID" i posten.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
