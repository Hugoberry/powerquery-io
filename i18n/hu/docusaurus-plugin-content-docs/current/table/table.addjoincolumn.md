---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Illesztést végez a táblákon a megadott oszlopok használatával, és egy új oszlopban helyezi el az illesztés eredményeit.


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

Összeilleszti a(z) `table1` tábla sorait a(z) `table2` tábla soraival a(z) `key1` (`table1` esetén) és a(z) `key2` (`table2` esetén) által kiválasztott kulcsoszlopok értékeinek egyenlősége alapján. Az eredmények a(z) `newColumnName` nevű oszlopba kerülnek. Ez a függvény a Table.Join függvényhez hasonlóan működik, LeftOuter értékű JoinKind beállítással, azzal a kivétellel, hogy az illesztés eredményei egybesimított helyett egymásba beágyazott módon jelennek meg.


## Examples

### Example #1
Egy „price/stock” nevű illesztési oszlop hozzáadása a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) táblához a \[saleID\] mező alapján összekapcsolt (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) táblából
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
