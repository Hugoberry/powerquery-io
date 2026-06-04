---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Соңғы N жолдары жойылған кестені қайтарады.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

`table` кестесінің соңғы `countOrCondition` жолдарын қамтымайтын кестені қайтарады. Жойылатын жолдар саны `countOrCondition` міндетті емес параметріне байланысты.

-   Егер `countOrCondition` көрсетілмесе, тек соңғы жол жойылады.
-   Егер `countOrCondition` сан болса, сонша жол (төменгі жағынан бастап) жойылады.
-   Егер `countOrCondition` шарт болса, жол шартқа сай емес болғанша шартқа сай жолдар жойылады.


## Examples

### Example #1
Кестенің соңғы жолын жою.
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
Кестенің \[CustomerID\] > 2 шарты орындалатын соңғы жолдарын жою.
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
