---
title: Record.AddField
---

# Record.AddField


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


## Remarks

Felvesz egy mezőt a(z) `record` rekordba a mező megadott `fieldName` neve és `value` értéke alapján.


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
