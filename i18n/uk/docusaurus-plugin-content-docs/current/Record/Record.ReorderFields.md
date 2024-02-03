---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Змінює порядок указаних полів на новий.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Повертає запис після зміни порядку полів у <code>record</code> на новий порядок полів, вказаний у списку <code>fieldOrder</code>. Значення полів зберігаються, і поля, не зазначені у списку <code>fieldOrder</code>, залишаються на своїй вихідній позиції.


## Examples

### Example #1 
Змінити порядок певних полів у записі.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
