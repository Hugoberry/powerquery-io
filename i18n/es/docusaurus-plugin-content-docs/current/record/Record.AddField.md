---
title: Record.AddField
---

# Record.AddField


Agrega un campo a un registro.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Agrega un campo a un registro <code>record</code>, dado el nombre del campo <code>fieldName</code> y el valor <code>value</code>.


## Examples

### Example #1 
Agregar el campo Dirección al registro.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
