---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Tiek atgriezts ieraksts, kura laukiem ir veiktas norādītās transformācijas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Atgriež ierakstu, kurā ir ietverti ieraksta <code>record</code> lauki, kuriem ir veiktas sarakstā <code>transformOperations</code> norādītās pārveidošanas darbības.    Vienlaikus var pārveidot vienu vai vairākus laukus.      <div>Ja tiek pārveidots viens lauks, sarakstā <code>transformOperations</code> ir jābūt ietvertiem diviem vienumiem. Saraksta <code>transformOperations</code> pirmais vienums norāda lauka nosaukumu, bet saraksta <code>transformOperations</code> otrais vienums — lietojamo pārveidošanas funkciju. Piemēram, <code>\{"Quantity", Number.FromText}</code></div>      <div>Ja tiek pārveidoti vairāki lauki, sarakstā <code>transformOperations</code> ir jābūt ietvertiem sarakstiem, un katrā no tiem ir jābūt norādītam lauka nosaukumam un pārveidošanas operācijai. Piemēram, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
