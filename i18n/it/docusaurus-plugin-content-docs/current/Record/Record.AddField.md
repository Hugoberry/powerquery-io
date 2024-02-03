---
title: Record.AddField
---

# Record.AddField


## Description

Aggiunge un campo a un record.


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

Aggiunge un campo a record <code>record</code>, corrispondente al nome del campo <code>fieldName</code> e al valore <code>value</code>.


## Examples

### Example #1 
Aggiungere il campo Address al record.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
