---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Повертає запис після застосування вказаних перетворень.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Повертає запис після застосування перетворень, указаних у списку <code>transformOperations</code>, до <code>record</code>.    Перетворювати можна одне поле або кілька полів водночас.      <div>У разі перетворення одного поля очікується, що <code>transformOperations</code> буде списком із двома елементами. Перший елемент <code>transformOperations</code> – це ім’я поля, а другий елемент <code>transformOperations</code> визначає функцію, яку потрібно використати для перетворення. Приклад: <code>\{"Quantity", Number.FromText}</code>.</div>      <div>У разі перетворення кількох полів очікується, що <code>transformOperations</code> буде списком списків, де кожен внутрішній список складається з двох елементів: імені поля та операції перетворення. Приклад: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code>.</div>


## Examples

### Example #1 
Перетворити поле &#34;Ціна&#34; на число.
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
Перетворити поля &#34;Ідентифікатор_замовлення&#34; та &#34;Ціна&#34; на числа.
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
