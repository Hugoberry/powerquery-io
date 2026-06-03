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

Kopplar raderna i `table1` med raderna i `table2` baserat på likheten mellan värdena i nyckelkolumnerna som valts av `key1` (för `table1`) och `key2` (för `table2`). Resultatet anges i kolumnen med namnet `newColumnName`. Den här funktionen fungerar ungefär som Table.Join med JoinKind-typen LeftOuter förutom att kopplingsresultatet visas i kapslat format i stället för i platt format.


## Examples

### Example #1
Lägg till en kopplingskolumn i (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) med namnet "price/stock" från tabellen (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) som är kopplad via \[saleID\].
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
