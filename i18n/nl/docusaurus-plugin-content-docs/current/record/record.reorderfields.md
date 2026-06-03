---
title: Record.ReorderFields
---

# Record.ReorderFields


Herschikt de recordvelden zodat deze overeenkomen met de volgorde van een lijst met veldnamen.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Herschikt de velden van een record zodat deze overeenkomen met de volgorde van een lijst met veldnamen.

-   `record`: Het record met de velden die moeten worden herschikt.
-   `fieldOrder`: Een lijst met de nieuwe volgorde van de velden die op het record moeten worden toegepast. Veldwaarden blijven behouden en velden die niet in deze parameter zijn vermeld, blijven op hun oorspronkelijke posities.
-   `missingField`Hiermee wordt de verwachte actie bepaald voor ontbrekende waarden in een rij die minder velden bevat dan verwacht. De volgende waarden zijn geldig:
    -   `MissingField.Error`: (Standaard) Geeft aan dat ontbrekende velden moeten resulteren in een fout. Als er geen waarde is opgegeven voor de `missingField` parameter, wordt deze waarde gebruikt.
    -   `MissingField.Ignore`: Geeft aan dat ontbrekende velden moeten worden genegeerd.
    -   `MissingField.UseNull`: Geeft aan dat ontbrekende velden moeten worden opgenomen als `null` waarden.


## Examples

### Example #1
De volgorde van een aantal velden in de record wijzigen.
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


### Example #2
Herschik enkele velden in de record en neem `null` op voor ontbrekende velden.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
