---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Palauttaa tietueen määritettyjen muunnosten käyttöönoton jälkeen.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Palauttaa tietueen luettelossa <code>transformOperations</code> määritettyjen muunnosten kohteelle <code>record</code> käyttöön ottamisen jälkeen.    Yksi tai useampi kenttä voidaan muuntaa jonakin tiettynä ajankohtana.      <div>Jos muunnetaan yksittäistä kenttää, kohteen <code>transformOperations</code> odotetaan olevan kaksi kohdetta sisältävä luettelo. Kohteen <code>transformOperations</code> ensimmäinen kohde määrittää kentän nimen ja kohteen <code>transformOperations</code> toinen kohde määrittää muunnokselle käytettävän funktion. Esimerkki: <code>\{"Quantity", Number.FromText}</code></div>      <div>Jos muunnetaan useita kenttiä, kohteen <code>transformOperations</code> odotetaan olevan luetteloiden luettelo, jossa kukin sisempi luettelo on kentän nimen ja muunnostoiminnon pari. Esimerkki: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
