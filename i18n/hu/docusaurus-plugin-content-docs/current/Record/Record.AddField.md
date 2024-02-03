---
title: Record.AddField
---

# Record.AddField


## Description

Felvesz egy mezőt egy rekordba.


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

Felvesz egy mezőt a(z) <code>record</code> rekordba a mező megadott <code>fieldName</code> neve és <code>value</code> értéke alapján.


## Examples

### Example #1 
Felveszi a Cím mezőt a rekordba.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
