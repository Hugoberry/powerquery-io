---
title: Record.TransformFields
---

# Record.TransformFields


Tiek atgriezts ieraksts, kura laukiem ir veiktas norādītās transformācijas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Atgriež ierakstu, kurā ir ietverti ieraksta `record` lauki, kuriem ir veiktas sarakstā `transformOperations` norādītās pārveidošanas darbības. Vienlaikus var pārveidot vienu vai vairākus laukus.

Ja tiek pārveidots viens lauks, sarakstā `transformOperations` ir jābūt ietvertiem diviem vienumiem. Saraksta `transformOperations` pirmais vienums norāda lauka nosaukumu, bet saraksta `transformOperations` otrais vienums — lietojamo pārveidošanas funkciju. Piemēram, `{"Quantity", Number.FromText}`

Ja tiek pārveidoti vairāki lauki, sarakstā `transformOperations` ir jābūt ietvertiem sarakstiem, un katrā no tiem ir jābūt norādītam lauka nosaukumam un pārveidošanas operācijai. Piemēram, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Pārveidojiet lauka Price vērtību par skaitli.
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
Pārveidot lauku OrderID un Price vērtības par skaitļiem.
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
