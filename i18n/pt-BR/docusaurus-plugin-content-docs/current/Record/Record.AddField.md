---
title: Record.AddField
---

# Record.AddField


Adiciona um campo a um registro.


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

Adiciona um campo a um registro <code>record</code> a partir do nome do campo <code>fieldName</code> e do valor <code>value</code>.


## Examples

### Example #1 
Adicionar o campo Address ao registro.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
