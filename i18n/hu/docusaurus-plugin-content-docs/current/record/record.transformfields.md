---
title: Record.TransformFields
---

# Record.TransformFields


Egy olyan rekordot ad vissza, amelyre alkalmazta a megadott átalakításokat.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amelyre alkalmazta a(z) `transformOperations` listán a következőre megadott átalakításokat: `record`. Egyszerre egy vagy több mező is átalakítható.

Egyetlen mező átalakítása esetén a(z) `transformOperations` listának két elemet kell tartalmaznia. A(z) `transformOperations` első eleme megad egy mezőnevet, a(z) `transformOperations` második eleme pedig megadja az átalakításhoz használandó függvényt. Például: `{"Quantity", Number.FromText}`

Több mező átalakítása esetén a(z) `transformOperations` listának listákból kell állnia, ahol a belső listák mindegyike egy mezőnévből és egy átalakítási műveletből álló pár. Például: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konvertálja a „Price” mezőt számmá.
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
Konvertálja az „OrderID” és a „Price” mezőt számmá.
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
