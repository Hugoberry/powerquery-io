---
title: Record.AddField
---

# Record.AddField


## Description

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


## Details

Přidá pole do záznamu <code>record</code> na základě jeho názvu <code>fieldName</code> a hodnoty <code>value</code>.


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
