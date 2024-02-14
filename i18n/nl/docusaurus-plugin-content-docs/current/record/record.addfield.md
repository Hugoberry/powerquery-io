---
title: Record.AddField
---

# Record.AddField


Voegt een veld aan een record toe.


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

Voegt een veld aan een record <code>record</code> toe op basis van de naam van het veld <code>fieldName</code> en de waarde <code>value</code>.


## Examples

### Example #1 
Het veld Adres toevoegen aan de record.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
