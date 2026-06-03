---
title: Record.TransformFields
---

# Record.TransformFields


Returnerer en post efter at have anvendt de angivne transformationer.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerer en post efter at have anvendt de transformationer, der er angivet på listen `transformOperations`, på `record`. Et eller flere felter kan transformeres på et givent tidspunkt.

Hvis der transformeres et enkelt felt, forventes `transformOperations` at være en liste med to elementer. Det første element i `transformOperations` angiver et feltnavn, og det andet element i `transformOperations` angiver den funktion, der skal bruges til transformationen. Eksempel `{"Quantity", Number.FromText}`

Hvis flere felter transformeres, forventes `transformOperations` at være en liste over lister, hvor alle de indeholdte lister er et par bestående af feltnavn og en transformationshandling. Eksempel `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konvertér feltet "Pris" til et tal.
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
Konvertér felterne "Ordre-id" og "Pris" til tal.
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
