---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Vraća zapis nakon primene navedenih transformacija.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vraća zapis nakon primene transformacija navedenih na listi <code>transformOperations</code> na <code>record</code>.    U datom trenutku se može transformisati jedno ili više polja.      <div>U slučaju da se transformiše jedno polje, očekuje se da će <code>transformOperations</code> biti lista sa dve stavke. Prva stavka iz <code>transformOperations</code> navodi ime polja, dok druga stavka iz <code>transformOperations</code> navodi funkciju koja će se koristiti za transformaciju. Na primer, <code>\{"Quantity", Number.FromText}</code></div>      <div>U slučaju da se transformiše više polja, očekuje se da će <code>transformOperations</code> biti lista koja se sastoji od lista, pri čemu je svaka unutrašnja lista zapravo kombinacija imena polja i operacije transformacije. Na primer, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
