---
title: Record.AddField
---

# Record.AddField


Ierakstam tiek pievienots lauks.


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

Ierakstam `record` tiek pievienots lauks atbilstoši norādītajam lauka nosaukumam `fieldName` un vērtībai `value`.


## Examples

### Example #1
Pievienojiet ierakstam lauku "Address".
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
