---
title: Record.ReorderFields
---

# Record.ReorderFields


Átrendezi a rekordmezőket a mezőnevek listájának sorrendjének megfelelően.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Átrendezi a rekordmezőket a mezőnevek listájának sorrendjének megfelelően.

-   `record`: Az átrendezendő mezőket tartalmazó rekord.
-   `fieldOrder`: A rekordra alkalmazandó mezők új sorrendjét tartalmazó lista. A mezőértékek megmaradnak, és az ebben a paraméterben nem szereplő mezők az eredeti pozíciójukban maradnak.
-   `missingField`: Meghatározza a hiányzó értékekkel kapcsolatos teendőt olyan sorok esetén, amely a vártnál kevesebb mezőt tartalmaznak. A következő értékek érvényesek:
    -   `MissingField.Error`: (Alapértelmezett) Azt jelzi, hogy a hiányzó mezők hibát eredményeznek. Ha nem ad meg értéket a `missingField` paraméterhez, a rendszer ezt az értéket használja.
    -   `MissingField.Ignore`: Azt jelzi, hogy a hiányzó mezőket figyelmen kívül kell hagyni.
    -   `MissingField.UseNull`: Azt jelzi, hogy a hiányzó mezőket `null` értékekként kell szerepeltetni.


## Examples

### Example #1
Újrarendezi a rekordban levő egyes mezőket.
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
Rendezze át a rekord egyes mezőit, és a hiányzó mezőket `null` értékre állítsa.
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
