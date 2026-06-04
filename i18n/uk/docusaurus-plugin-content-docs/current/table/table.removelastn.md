---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Повертає таблицю з видаленими останніми N рядками.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Повертає таблицю, що містить зазначену кількість останніх рядків (`countOrCondition`), у таблиці `table`. Кількість вилучених рядків залежить від додаткового параметра `countOrCondition`.

-   Якщо `countOrCondition` не зазначено, вилучається лише останній рядок.
-   Якщо `countOrCondition` – число, вилучається відповідна кількість рядків (починаючи знизу).
-   Якщо `countOrCondition` – умова, вилучаються рядки, що відповідають цій умові, до рядка, який їй не відповідає.


## Examples

### Example #1
Видалити останній рядок таблиці.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Видалити з таблиці останні рядки, для яких виконується умова \[CustomerID\] > 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
