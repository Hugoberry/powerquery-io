---
title: Record.RemoveFields
---

# Record.RemoveFields


Видаляє вказані поля із вхідного запису.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Повертає запис, який вилучає всі поля, вказані в списку `fields`, із вхідного запису `record`. Якщо вказане поле не існує, стається помилка.


## Examples

### Example #1
Видалити поле "Price" із запису.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Видалити поля "Price" та "Item" із запису.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
