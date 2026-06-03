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

`fieldName` alan adı ve `value` değeri verildiğinde `record` kaydına bir alan ekler.


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
