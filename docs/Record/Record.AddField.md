---
title: Record.AddField
---

# Record.AddField


## Description

Adds a field to a record.


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

Adds a field to a record <code>record</code>, given the name of the field <code>fieldName</code> and the value <code>value</code>.


## Examples

### Example #1 
Add the field Address to the record.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
