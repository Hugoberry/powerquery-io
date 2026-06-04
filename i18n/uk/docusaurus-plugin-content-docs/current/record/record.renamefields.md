---
title: Record.RenameFields
---

# Record.RenameFields


Застосовує перейменування зі списку у вигляді \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Повертає запис після перейменування полів у вхідному `record` на нові імена полів, вказані у списку `renames`. Для кількох перейменувань можна використовувати вкладений список (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Перейменувати поле "UnitPrice" на "Price" із запису.
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
Перейменувати поля "UnitPrice" на "Price" та "OrderNum" на "OrderID" із запису.
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
