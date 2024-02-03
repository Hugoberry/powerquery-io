---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Dispone i campi specificati nel nuovo ordine.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Restituisce un record dopo il riordinamento dei campi in <code>record</code> nell'ordine dei campi specificati nell'elenco <code>fieldOrder</code>. I valori dei campi vengono conservati e i campi non elencati in <code>fieldOrder</code> vengono lasciati nella posizione originale.


## Examples

### Example #1 
Riordinare alcuni dei campi nel record.
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
