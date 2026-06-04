---
title: Table.FirstN
---

# Table.FirstN


Көрсетілген бірінші санақ жолдарын қайтарады.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

`countOrCondition` мәніне байланысты `table` кестесінің бірінші жол(дар)ын қайтарады:

-   Егер `countOrCondition` сан болса, онда көп жол (жоғарғы жағынан бастап) қайтарылады.
-   Егер `countOrCondition` шарт болса, жол шартқа сай емес болғанша шартқа сай жолдар қайтарылады.


## Examples

### Example #1
Кестенің бірінші екі жолын анықтау.
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
Кестедегі \[a\] > 0 болатын бірінші жолдарды анықтау.
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
