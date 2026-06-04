---
title: Record.AddField
---

# Record.AddField


Přidá pole do záznamu.


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

Přidá pole do záznamu `record` na základě jeho názvu `fieldName` a hodnoty `value`.


## Examples

### Example #1
Přidá pole adresy do záznamu.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
