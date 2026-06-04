---
title: Record.AddField
---

# Record.AddField


Engade un campo a un rexistro.


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

Engade un campo a un rexistro `record`, indicado o nome do campo `fieldName` e o valor `value`.


## Examples

### Example #1
Engadir o campo Enderezo ao rexistro.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
