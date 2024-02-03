---
title: Record.AddField
---

# Record.AddField


## Description

Adaugă un câmp la o înregistrare.


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

Adaugă un câmp la o înregistrare <code>record</code>, ţinând cont de numele câmpului <code>fieldName</code> şi de valoarea <code>value</code>.


## Examples

### Example #1 
Adăugați câmpul Adresă la înregistrare.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
