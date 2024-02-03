---
title: Record.AddField
---

# Record.AddField


## Description

Engade un campo a un rexistro.


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

Engade un campo a un rexistro <code>record</code>, indicado o nome do campo <code>fieldName</code> e o valor <code>value</code>.


## Examples

### Example #1 
Engadir o campo Enderezo ao rexistro.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
