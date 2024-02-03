---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Застосовує перейменування зі списку у вигляді \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Повертає запис після перейменування полів у вхідному <code>record</code> на нові імена полів, вказані у списку <code>renames</code>. Для кількох перейменувань можна використовувати вкладений список (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Перейменувати поле &#34;UnitPrice&#34; на &#34;Price&#34; із запису.
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
Перейменувати поля &#34;UnitPrice&#34; на &#34;Price&#34; та &#34;OrderNum&#34; на &#34;OrderID&#34; із запису.
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
