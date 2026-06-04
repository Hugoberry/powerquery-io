---
title: Record.AddField
---

# Record.AddField


Afegeix un camp a un registre.


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

Afegeix un camp a un registre `record`, donat el nombre del camp `fieldName` i el valor `value`.


## Examples

### Example #1
Afegeix el camp Address al registre.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
