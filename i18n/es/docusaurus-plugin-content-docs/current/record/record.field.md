---
title: Record.Field
---

# Record.Field


Devuelve el valor del campo especificado en un registro.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Devuelve el valor de `field` especificado en el `record`. Si no se encuentra el campo, se produce un error.


## Examples

### Example #1
Hallar el valor del campo "CustomerID" en el registro.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
