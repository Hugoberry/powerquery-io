---
title: Record.AddField
---

# Record.AddField


## Description

Dodaje polje u zapis.


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

Dodaje polje u zapis <code>record</code>, na osnovu imena polja <code>fieldName</code> i vrednosti <code>value</code>.


## Examples

### Example #1 
Dodavanje polja „Adresa“ u zapis.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
