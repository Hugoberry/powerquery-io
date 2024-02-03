---
title: Record.AddField
---

# Record.AddField


## Description

Prie įrašo pridedamas laukas.


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

Prie įrašo <code>record</code> pridedamas laukas su lauko pavadinimu <code>fieldName</code> ir reikšme <code>value</code>.


## Examples

### Example #1 
Į įrašą įtraukite lauką „Address“.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
