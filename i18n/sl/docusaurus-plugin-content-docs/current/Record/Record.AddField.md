---
title: Record.AddField
---

# Record.AddField


## Description

Doda polje v zapis.


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

Doda polje v zapis <code>record</code>, če navedete ime polja <code>fieldName</code> in vrednost <code>value</code>.


## Examples

### Example #1 
V zapis dodajte polje za naslov.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
