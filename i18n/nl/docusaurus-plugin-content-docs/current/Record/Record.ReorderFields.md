---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

De volgorde van de opgegeven velden in de nieuwe volgorde wijzigen.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourneert een record na het wijzigen van de volgorde van de velden in <code>record</code> in de volgorde van de velden zoals opgegeven in de lijst <code>fieldOrder</code>. De veldnamen worden niet gewijzigd en de velden die niet in <code>fieldOrder</code> staan, veranderen niet van plaats.


## Examples

### Example #1 
De volgorde van een aantal velden in de record wijzigen.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
