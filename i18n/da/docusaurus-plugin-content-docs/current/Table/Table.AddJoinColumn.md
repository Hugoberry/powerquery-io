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

Joinforbinder rækkerne i <code>table1</code> med rækkerne i <code>table2</code> på baggrund af ligheden mellem værdier i de nøglekolonner, der er valgt af <code>key1</code> (for <code>table1</code>) og <code>key2</code> (for <code>table2</code>). Resultaterne angives i den kolonne, der hedder <code>newColumnName</code>.Denne funktion fungerer på samme måde som Table.Join, hvor JoinKind er angivet til LeftOuter, med den undtagelse at joinresultaterne vises indlejret og ikke i en flad struktur.


## Examples

### Example #1 
Føj en joinforbundet kolonne til (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) med navnet &#34;price/stock&#34; fra tabellen (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}), der er joinforbundet på [saleID].
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
