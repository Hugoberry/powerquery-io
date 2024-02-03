---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Ändrar ordning på det eller de angivna fälten till den nya ordningen.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnerar en post efter omordning av fälten i <code>record</code> med den fältordning som anges i listan <code>fieldOrder</code>. Fältvärden bevaras och fält som inte finns i <code>fieldOrder</code> lämnas på den ursprungliga positionen.


## Examples

### Example #1 
Ändra ordning på fälten i posten.
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
