---
title: Record.AddField
---

# Record.AddField


## Description

Dodaje pole do rekordu.


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

Dodaje pole do rekordu <code>record</code>, używając nazwy pola <code>fieldName</code> i wartości <code>value</code>.


## Examples

### Example #1 
Dodaj pole Address do rekordu.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
