---
title: Record.TransformFields
---

# Record.TransformFields


Возвращает запись после применения указанных преобразований.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Возвращает запись после применения преобразований, указанных в списке `transformOperations`, в `record`. Одновременно может быть преобразовано одно поле или несколько.

В случае одного преобразуемого поля предполагается, что `transformOperations` — список с двумя элементами. Первый элемент в `transformOperations` указывает имя поля, а второй элемент в `transformOperations` указывает функцию, используемую для преобразования. Например, `{"Quantity", Number.FromText}`

В случае преобразования нескольких полей предполагается, что `transformOperations` — список списков, где каждый внутренний список представляет собой пару из имени поля и операции преобразования. Например, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Преобразовать поле "Price" в число.
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
Преобразовать поля "OrderID" и "Price" в числа.
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
