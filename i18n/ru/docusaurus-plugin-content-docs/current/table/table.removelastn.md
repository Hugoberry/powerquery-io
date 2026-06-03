---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Возвращает таблицу, из которой удалены N последних строк.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Возвращает таблицу, не содержащую последние строки (`countOrCondition`) в таблице `table`. Количество удаленных строк зависит от необязательного параметра `countOrCondition`.

-   Если `countOrCondition` не указано, удаляется только последняя строка.
-   Если `countOrCondition` — число, удаляется соответствующее количество строк (с конца).
-   Если `countOrCondition` — условие, будут удалены строки, соответствующие условию, до первой строки, не соответствующей условию.


## Examples

### Example #1
Удаление последней строки таблицы.
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
Удаление из таблицы последних строк, в которых \[CustomerID\] > 2.
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
