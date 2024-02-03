---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Vraća zapis koji sadrži samo navedena polja.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vraća zapis koji obuhvata samo polja navedena na listi <code>fields</code> iz unosa <code>record</code>.


## Examples

### Example #1 
Biranje polja „Stavka“ i „Cena“ iz zapisa.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
