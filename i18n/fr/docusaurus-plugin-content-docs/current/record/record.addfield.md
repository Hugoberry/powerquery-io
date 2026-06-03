---
title: Record.AddField
---

# Record.AddField


Ajoute un champ à un enregistrement.


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

Ajoute un champ à un enregistrement `record`, selon le nom du champ `fieldName` et la valeur `value`.


## Examples

### Example #1
Ajoute le champ « Address » à l'enregistrement.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
