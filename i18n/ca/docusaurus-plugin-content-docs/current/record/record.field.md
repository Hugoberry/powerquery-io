---
title: Record.Field
---

# Record.Field


Retorna el valor del camp especificat en un registre.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Retorna el valor del `field` especificat al `record`. Si no es troba el camp, es produeix un error.


## Examples

### Example #1
Cerca el valor del camp "CustomerID" al registre.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
