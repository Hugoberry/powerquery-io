---
title: Record.TransformFields
---

# Record.TransformFields


Повертає запис після застосування вказаних перетворень.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Повертає запис після застосування перетворень, указаних у списку `transformOperations`, до `record`. Перетворювати можна одне поле або кілька полів водночас.

У разі перетворення одного поля очікується, що `transformOperations` буде списком із двома елементами. Перший елемент `transformOperations` – це ім’я поля, а другий елемент `transformOperations` визначає функцію, яку потрібно використати для перетворення. Приклад: `{"Quantity", Number.FromText}`.

У разі перетворення кількох полів очікується, що `transformOperations` буде списком списків, де кожен внутрішній список складається з двох елементів: імені поля та операції перетворення. Приклад: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`.


## Examples

### Example #1
Перетворити поле "Ціна" на число.
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
Перетворити поля "Ідентифікатор\_замовлення" та "Ціна" на числа.
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
