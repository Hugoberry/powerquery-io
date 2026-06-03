---
title: Record.RenameFields
---

# Record.RenameFields


Применяет переименования из списка в форме \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Возвращает запись после переименования полей во входных данных `record` с присвоением им новых имен, указанных в списке `renames`. Для нескольких переименований можно использовать вложенный список (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Переименование поля UnitPrice в Price в записи.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Переименование поля UnitPrice в Price, а поле OrderNum в OrderID в записи.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
