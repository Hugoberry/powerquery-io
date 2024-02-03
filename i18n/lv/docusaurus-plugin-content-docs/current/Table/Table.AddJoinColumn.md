---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Tiek veikta tabulu savienošana pēc norādītajām kolonnām, un savienošanas rezultāts tiek ietverts jaunā kolonnā.


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

Tabulas <code>table1</code> rindas tiek savienotas ar tabulas <code>table2</code> rindām atbilstoši tam, vai ar funkcijām <code>key1</code> (tabulai <code>table1</code>) un <code>key2</code> (tabulai <code>table2</code>) atlasīto atslēgas kolonnu vērtības ir vienādas. Rezultāti tiek ietverti kolonnā ar nosaukumu <code>newColumnName</code>.Šī funkcija darbojas līdzīgi kā funkcija Table.Join ar parametra JoinKind vērtību LeftOute, taču savienojuma rezultāts tiek izvadīts ligzdotā, nevis izplātā veidā.


## Examples

### Example #1 
Pievienojiet tabulai (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) savienojuma kolonnu ar nosaukumu price/stock, veicot šīs tabulas savienošanu ar tabulu (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) pēc kolonnas [saleID].
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
