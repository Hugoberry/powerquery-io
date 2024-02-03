---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

<code>key1</code> (<code>table1</code> үшін) және <code>key2</code> (<code>table2</code> үшін) арқылы таңдалған кілт бағандардың теңдігіне негізделген <code>table2</code> жол бар <code>table1</code> жолдарын біріктіреді. Нәтижелер <code>newColumnName</code> атты бағанға енгізіледі.Бұл функция LeftOuter біріктіру түрі бар Table.Join сияқты әрекет етеді, тек біріктіру нәтижелері тураланған түрде емес, енгізілген түрде көрсетіледі.


## Examples

### Example #1 
[saleID] бойынша біріктірілген (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) кестесіндегі &#34;баға/қор&#34; атты (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) біріктіру бағанын қосу.
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
