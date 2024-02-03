---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Norādītie lauki tiek pārkāroti jaunajā secībā.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Tiek atgriezts ieraksts, kurā ieraksta <code>record</code> laukiem ir sakārtoti sarakstā <code>fieldOrder</code> norādītajā secībā. Lauku vērtības tiek saglabātas, un sarakstā <code>fieldOrder</code> neietvertie lauki netiek pārkārtoti.


## Examples

### Example #1 
Pārkārtojiet dažus ieraksta laukus.
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
