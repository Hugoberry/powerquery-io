---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Udfører en joinforbindelse mellem tabeller på angivne kolonner og opretter joinresultatet i en ny kolonne.


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

Joinforbinder rækkerne i `table1` med rækkerne i `table2` på baggrund af ligheden mellem værdier i de nøglekolonner, der er valgt af `key1` (for `table1`) og `key2` (for `table2`). Resultaterne angives i den kolonne, der hedder `newColumnName`. Denne funktion fungerer på samme måde som Table.Join, hvor JoinKind er angivet til LeftOuter, med den undtagelse at joinresultaterne vises indlejret og ikke i en flad struktur.


## Examples

### Example #1
Føj en joinforbundet kolonne til (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) med navnet "price/stock" fra tabellen (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}), der er joinforbundet på \[saleID\].
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
