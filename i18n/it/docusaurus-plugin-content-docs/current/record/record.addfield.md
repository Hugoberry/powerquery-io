---
title: Record.AddField
---

# Record.AddField


Aggiunge un campo a un record.


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

Aggiunge un campo a record `record`, corrispondente al nome del campo `fieldName` e al valore `value`.


## Examples

### Example #1
Aggiungere il campo Address al record.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
