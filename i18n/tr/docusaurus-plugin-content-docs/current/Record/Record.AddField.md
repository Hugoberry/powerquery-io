---
title: Record.AddField
---

# Record.AddField


Bir kayda alan ekler.


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

<code>fieldName</code> alan adı ve <code>value</code> değeri verildiğinde <code>record</code> kaydına bir alan ekler.


## Examples

### Example #1 
Kayda alan Adresini ekler.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
