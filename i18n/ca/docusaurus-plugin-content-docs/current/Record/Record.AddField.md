---
title: Record.AddField
---

# Record.AddField


## Description

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


## Details

Afegeix un camp a un registre <code>record</code>, donat el nombre del camp <code>fieldName</code> i el valor <code>value</code>.


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
