---
title: Record.AddField
---

# Record.AddField


## Description

Pridá pole k záznamu.


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

Pridá pole k záznamu <code>record</code> s daným názvom poľa <code>fieldName</code> a s hodnotou <code>value</code>.


## Examples

### Example #1 
Pridajte k záznamu pole Address.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
