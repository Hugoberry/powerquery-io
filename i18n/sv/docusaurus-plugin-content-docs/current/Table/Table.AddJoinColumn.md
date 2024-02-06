---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Skapar en koppling mellan tabeller för angivna kolumner och genererar kopplingsresultatet i en ny kolumn.


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

Kopplar raderna i <code>table1</code> med raderna i <code>table2</code> baserat på likheten mellan värdena i nyckelkolumnerna som valts av <code>key1</code> (för <code>table1</code>) och <code>key2</code> (för <code>table2</code>). Resultatet anges i kolumnen med namnet <code>newColumnName</code>.Den här funktionen fungerar ungefär som Table.Join med JoinKind-typen LeftOuter förutom att kopplingsresultatet visas i kapslat format i stället för i platt format.


## Examples

### Example #1 
Lägg till en kopplingskolumn i (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) med namnet &#34;price/stock&#34; från tabellen (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) som är kopplad via [saleID].
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
