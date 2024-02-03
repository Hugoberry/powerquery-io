---
title: Record.AddField
---

# Record.AddField


## Description

Føjer et felt til en post.


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

Føjer et felt til en post <code>record</code> med navnet på feltet <code>fieldName</code> og værdien <code>value</code>.


## Examples

### Example #1 
Føj feltet Adresse til posten].
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
