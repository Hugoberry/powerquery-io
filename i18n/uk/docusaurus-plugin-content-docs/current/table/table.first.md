---
title: Table.First
---

# Table.First


Повертає перший рядок або вказане значення за замовчуванням.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Повертає перший рядок у `table` або додаткове значення за замовчуванням, `default`, якщо таблиця пуста.


## Examples

### Example #1
Знайти перший рядок таблиці.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Знайти перший рядок таблиці `({})` або повернути \[a = 0, b = 0\] у разі пустої таблиці.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
