---
title: Record.TransformFields
---

# Record.TransformFields


Returnează o înregistrare după aplicarea transformărilor specificate.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnează o înregistrare după aplicarea transformărilor specificate în lista `transformOperations` la `record`. Unul sau mai multe câmpuri pot fi transformate la un moment dat.

În cazul transformării unui singur câmp, se așteaptă ca `transformOperations` să fie o listă cu două elemente. Primul element din `transformOperations` specifică un nume de câmp, iar al doilea element din `transformOperations` specifică funcția de utilizat pentru transformare. De exemplu, `{"Quantity", Number.FromText}`

În cazul transformării mai multor câmpuri, se așteaptă ca `transformOperations` să fie o listă de liste, în care fiecare listă interioară este o pereche de nume de câmp și operațiune de transformare. De exemplu, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Efectuați conversia câmpului „Preț” la un număr.
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
Efectuați conversia câmpurilor „IDComandă” și „Preț” la numere.
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
