---
title: Record.TransformFields
---

# Record.TransformFields


Palauttaa tietueen määritettyjen muunnosten käyttöönoton jälkeen.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Palauttaa tietueen luettelossa `transformOperations` määritettyjen muunnosten kohteelle `record` käyttöön ottamisen jälkeen. Yksi tai useampi kenttä voidaan muuntaa jonakin tiettynä ajankohtana.

Jos muunnetaan yksittäistä kenttää, kohteen `transformOperations` odotetaan olevan kaksi kohdetta sisältävä luettelo. Kohteen `transformOperations` ensimmäinen kohde määrittää kentän nimen ja kohteen `transformOperations` toinen kohde määrittää muunnokselle käytettävän funktion. Esimerkki: `{"Quantity", Number.FromText}`

Jos muunnetaan useita kenttiä, kohteen `transformOperations` odotetaan olevan luetteloiden luettelo, jossa kukin sisempi luettelo on kentän nimen ja muunnostoiminnon pari. Esimerkki: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Muunna kenttä Price luvuksi.
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
Muunna kentät OrderID ja Price luvuiksi.
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
