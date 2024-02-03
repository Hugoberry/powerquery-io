---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Összeilleszti a(z) <code>table1</code> tábla sorait a(z) <code>table2</code> tábla soraival a(z) <code>key1</code> (<code>table1</code> esetén) és a(z) <code>key2</code> (<code>table2</code> esetén) által kiválasztott kulcsoszlopok értékeinek egyenlősége alapján. Az eredmények a(z) <code>newColumnName</code> nevű oszlopba kerülnek.Ez a függvény a Table.Join függvényhez hasonlóan működik, LeftOuter értékű JoinKind beállítással, azzal a kivétellel, hogy az illesztés eredményei egybesimított helyett egymásba beágyazott módon jelennek meg.


## Examples

### Example #1 
Egy „price/stock” nevű illesztési oszlop hozzáadása a (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) táblához a [saleID] mező alapján összekapcsolt (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) táblából
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
