---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Vrne zapis, ki vsebuje le navedena polja.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrne zapis, ki vključuje le polja, navedena na seznamu <code>fields</code> iz zapisa <code>record</code>.


## Examples

### Example #1 
Izberite polji &#34;Izdelek&#34; in &#34;Cena&#34; v zapisu.
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
