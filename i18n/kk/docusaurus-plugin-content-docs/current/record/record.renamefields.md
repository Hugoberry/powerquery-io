---
title: Record.RenameFields
---

# Record.RenameFields


\{ old, new \} түріндегі тізімнен қайта атауларды қолданады.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Кіріс `record` ішіндегі `renames` тізімінде көрсетілген жаңа өріс атауларын қайта атаудан кейін жазбаны қайтарады. Бірнеше қайта атау үшін енгізілген тізімді (\{ \{old1, new1\}, \{old2, new2\} \}) пайдалануға болады.


## Examples

### Example #1
Жазбадан "UnitPrice" өрісінің атауын "Price" деп өзгерту.
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
Жазбадан "UnitPrice" өрісін "Price" деп және "OrderNum" өрісін "OrderID" деп өзгерту.
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
