---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Preuređivanje navedenih polja u novi redosled.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vraća zapis nakon preuređivanja polja iz <code>record</code> u redosled polja naveden na listi <code>fieldOrder</code>. Vrednosti polja se zadržavaju, dok se polja koja nisu navedena u <code>fieldOrder</code> ostavljaju u prvobitnom položaju.


## Examples

### Example #1 
Preuređivanje nekih polja iz zapisa.
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
