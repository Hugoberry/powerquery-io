---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Применяет переименования из списка в форме \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Возвращает запись после присвоения полям во входных данных <code>record</code> новых имен, указанных в списке <code>renames</code>. Для нескольких переименований можно использовать вложенный список (\{ \{старое1, новое1}, \{старое2, новое2} }.


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
