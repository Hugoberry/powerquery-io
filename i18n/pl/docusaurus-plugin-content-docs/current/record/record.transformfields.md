---
title: Record.TransformFields
---

# Record.TransformFields


Zwraca rekord po zastosowaniu określonych przekształceń.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Zwraca rekord powstały w wyniku zastosowania do rekordu `record` przekształceń określonych na liście `transformOperations`. W danej chwili może być przekształcane jedno lub większa liczba pól.

W przypadku przekształcania jednego pola lista `transformOperations` musi zawierać dwa elementy. Pierwszy element na liście `transformOperations` określa nazwę pola, a drugi element na liście `transformOperations` określa funkcję, która będzie używana do wykonania przekształcenia. Na przykład `{"Quantity", Number.FromText}`

W przypadku przekształcania wielu pól lista `transformOperations` musi być listą list, a każda lista wewnętrzna musi zawierać parę nazwa pola oraz operacja przekształcenia. Na przykład `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konwertuj pole „Cena” na liczbę.
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
Konwertuj wartości pól „Identyfikator zamówienia” i „Cena” na liczby.
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
