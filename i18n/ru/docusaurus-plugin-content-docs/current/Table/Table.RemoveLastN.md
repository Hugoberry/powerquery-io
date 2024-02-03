---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Возвращает таблицу, из которой удалены N последних строк.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Возвращает таблицу, не содержащую последние строки (<code>countOrCondition</code>) в таблице <code>table</code>.        Количество удаленных строк зависит от необязательного параметра <code>countOrCondition</code>.    <ul>    <li> Если <code>countOrCondition</code> не указано, удаляется только последняя строка. </li>    <li> Если <code>countOrCondition</code> — число, удаляется соответствующее количество строк (с конца). </li>    <li> Если <code>countOrCondition</code> — условие, будут удалены строки, соответствующие условию, до первой строки, не соответствующей условию.</li>    </ul>


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
Удаление из таблицы последних строк, в которых [CustomerID] &gt; 2.
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
