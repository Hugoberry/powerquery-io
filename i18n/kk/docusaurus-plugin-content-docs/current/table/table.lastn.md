---
title: Table.LastN
---

# Table.LastN


Соңғы көрсетілген жолдар санын қайтарады.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

`countOrCondition` мәніне байланысты `table` кестесінен соңғы жол(дар)ды қайтарады:

-   Егер `countOrCondition` сан болса, (соңы - `countOrCondition`) орнынан бастап көп жол қайтарылады.
-   Егер `countOrCondition` шарт болса, жол шартқа сай емес болғанша, арту ретімен осы шартқа сай жолдар қайтарылады.


## Examples

### Example #1
Кестенің соңғы екі жолын анықтау.
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
Кестеде \[a\] > 0 болатын соңғы жолдарды анықтау.
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
