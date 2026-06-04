---
title: Record.AddField
---

# Record.AddField


Dodaje polje u zapis.


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

Dodaje polje u zapis `record`, na osnovu imena polja `fieldName` i vrednosti `value`.


## Examples

### Example #1
Dodavanje polja „Adresa“ u zapis.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
