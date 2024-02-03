---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Retourneert een record na het toepassen van de opgegeven transformaties.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Hiermee wordt een record geretourneerd na het toepassen van transformaties die zijn opgegeven in lijst <code>transformOperations</code> tot en met <code>record</code>. Een of meer velden kunnen worden getransformeerd op een opgegeven tijdstip. <div>Als er één veld wordt getransformeerd, wordt verwacht dat <code>transformOperations</code> een lijst met twee items is. Het eerste item in <code>transformOperations</code> geeft een veldnaam aan en het tweede item in <code>transformOperations</code> geeft de functie aan die moet worden gebruikt voor de transformatie. Bijvoorbeeld <code>\{"Quantity", Number.FromText}</code></div> <div>In het geval er meerdere velden worden getransformeerd, wordt verwacht dat <code>transformOperations</code> een lijst van lijsten is, waarbij elke interne lijst een combinatie is van een veldnaam en een transformatiebewerking. Bijvoorbeeld <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Het veld Prijs converteren naar een getal.
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
De velden OrderID en Prijs naar nummers converteren.
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
