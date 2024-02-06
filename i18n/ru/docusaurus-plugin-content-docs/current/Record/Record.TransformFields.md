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

Возвращает запись после применения преобразований, указанных в списке <code>transformOperations</code>, в <code>record</code>.    Одновременно может быть преобразовано одно поле или несколько.      <div>В случае одного преобразуемого поля предполагается, что <code>transformOperations</code> — список с двумя элементами. Первый элемент в <code>transformOperations</code> указывает имя поля, а второй элемент в <code>transformOperations</code> указывает функцию, используемую для преобразования. Например, <code>\{"Quantity", Number.FromText}</code></div>      <div>В случае преобразования нескольких полей предполагается, что <code>transformOperations</code> — список списков, где каждый внутренний список представляет собой пару из имени поля и операции преобразования. Например, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Преобразовать поле &#34;Price&#34; в число.
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
Преобразовать поля &#34;OrderID&#34; и &#34;Price&#34; в числа.
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
