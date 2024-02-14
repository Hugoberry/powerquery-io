---
title: Record.FieldValues
---

# Record.FieldValues


Devuelve una lista de valores de campo.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Devuelve una lista de valores de campo del registro <code>record</code>.


## Examples

### Example #1 
Hallar los valores de campos en el registro.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
