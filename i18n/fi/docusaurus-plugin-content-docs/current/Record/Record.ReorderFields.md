---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Järjestää määritetyt kentät uudelleen uuteen järjestykseen.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Palauttaa tietueen sen jälkeen, kun kohteen <code>record</code> kentät on järjestetty uudelleen luettelossa <code>fieldOrder</code> määritetyllä kenttien järjestyksellä. Kenttien arvot säilytetään, ja kentät, joita ei ole lueteltu kohteessa <code>fieldOrder</code>, jätetään niiden alkuperäisiin sijainteihin.


## Examples

### Example #1 
Järjestä joitakin tietueen kenttiä uudelleen.
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
