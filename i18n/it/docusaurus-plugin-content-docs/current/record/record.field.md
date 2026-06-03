---
title: Record.Field
---

# Record.Field


Restituisce il valore del campo specificato in un record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Restituisce il valore dell'elemento specificato `field` in `record`. Se non si trova il campo, viene generato un errore.


## Examples

### Example #1
Trovare il valore del campo "CustomerID" nel record.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
