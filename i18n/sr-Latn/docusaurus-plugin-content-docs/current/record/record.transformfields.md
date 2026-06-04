---
title: Record.TransformFields
---

# Record.TransformFields


Vraća zapis nakon primene navedenih transformacija.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vraća zapis nakon primene transformacija navedenih na listi `transformOperations` na `record`. U datom trenutku se može transformisati jedno ili više polja.

U slučaju da se transformiše jedno polje, očekuje se da će `transformOperations` biti lista sa dve stavke. Prva stavka iz `transformOperations` navodi ime polja, dok druga stavka iz `transformOperations` navodi funkciju koja će se koristiti za transformaciju. Na primer, `{"Quantity", Number.FromText}`

U slučaju da se transformiše više polja, očekuje se da će `transformOperations` biti lista koja se sastoji od lista, pri čemu je svaka unutrašnja lista zapravo kombinacija imena polja i operacije transformacije. Na primer, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konvertujte polje „Cena“ u broj.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
Konvertujte polja „ID porudžbine“ i „Cena“ u brojeve.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
