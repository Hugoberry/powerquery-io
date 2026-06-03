---
title: Table.LastN
---

# Table.LastN


Возвращает указанное количество строк с конца.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Возвращает последние строки таблицы `table` в зависимости от значения `countOrCondition`:

-   Если `countOrCondition` является числом, то будет возвращено соответствующее количество строк, начиная с позиции (последняя - `countOrCondition`).
-   Если `countOrCondition` является условием, то строки возвращаются в порядке возрастания до тех пор, пока не будет встречена строка, не соответствующая условию.


## Examples

### Example #1
Нахождение последних двух строк таблицы.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Нахождение последних строк, в которых \[a\] > 0, в таблице.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
