---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Sujungiami pateikti lentelių stulpeliai, sujungimo rezultatas pateikiamas naujame stulpelyje.


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

Sujungiamos <code>table1</code> eilutės su <code>table2</code> eilutėmis, atsižvelgiant į raktinių stulpelių, pasirinktų <code>key1</code> (<code>table1</code>) ir <code>key2</code> (<code>table2</code>), reikšmių lygiateisiškumą. Rezultatai įvedami į stulpelį, kurio pavadinimas <code>newColumnName</code>.Ši funkcija veikia panašiai kaip Table.Join su JoinKind arba LeftOuter, išskyrus tai, kad sujungimo rezultatai pateikiami įdėti, o ne plokščiuoju principu.


## Examples

### Example #1 
Pridėkite sujungtą stulpelį prie (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) pavadinimu „price/stock“ iš lentelės (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}), sujungtos [saleID].
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
