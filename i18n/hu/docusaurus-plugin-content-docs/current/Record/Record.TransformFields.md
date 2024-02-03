---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Egy olyan rekordot ad vissza, amelyre alkalmazta a megadott átalakításokat.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Egy olyan rekordot ad vissza, amelyre alkalmazta a(z) <code>transformOperations</code> listán a következőre megadott átalakításokat: <code>record</code>.    Egyszerre egy vagy több mező is átalakítható.       <div>Egyetlen mező átalakítása esetén a(z) <code>transformOperations</code> listának két elemet kell tartalmaznia. A(z) <code>transformOperations</code> első eleme megad egy mezőnevet, a(z) <code>transformOperations</code> második eleme pedig megadja az átalakításhoz használandó függvényt. Például: <code>\{"Quantity", Number.FromText}</code></div>      <div>Több mező átalakítása esetén a(z) <code>transformOperations</code> listának listákból kell állnia, ahol a belső listák mindegyike egy mezőnévből és egy átalakítási műveletből álló pár. Például: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
