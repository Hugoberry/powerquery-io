---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Қамтамасыз етілген бағандарда кестелер арасында біріктіруді орындайды және жаңа бағанда біріктіру нәтижесін береді.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

`key1` (`table1` үшін) және `key2` (`table2` үшін) арқылы таңдалған кілт бағандардың теңдігіне негізделген `table2` жол бар `table1` жолдарын біріктіреді. Нәтижелер `newColumnName` атты бағанға енгізіледі. Бұл функция LeftOuter біріктіру түрі бар Table.Join сияқты әрекет етеді, тек біріктіру нәтижелері тураланған түрде емес, енгізілген түрде көрсетіледі.


## Examples

### Example #1
\[saleID\] бойынша біріктірілген (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) кестесіндегі "баға/қор" атты (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) біріктіру бағанын қосу.
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
