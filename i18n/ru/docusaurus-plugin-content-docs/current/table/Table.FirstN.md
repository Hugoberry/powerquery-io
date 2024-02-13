---
title: Table.FirstN
---

# Table.FirstN


Возвращает указанное количество строк от начала.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Возвращает первые строки таблицы <code>table</code> в зависимости от значения <code>countOrCondition</code>:    <ul>    <li> Если <code>countOrCondition</code> является числом, то указывает, сколько строк возвращается (начиная с верхней). </li>    <li> Если <code>countOrCondition</code> является условием, то строки возвращаются до тех пор, пока не будет достигнута строка, не удовлетворяющая условию.</li></ul>


## Examples

### Example #1 
Нахождение первых двух строк таблицы.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Нахождение первых строк, в которых [a] &gt; 0, в таблице.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
