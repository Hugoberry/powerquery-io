---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


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


## Remarks

Sujungiamos `table1` eilutės su `table2` eilutėmis, atsižvelgiant į raktinių stulpelių, pasirinktų `key1` (`table1`) ir `key2` (`table2`), reikšmių lygiateisiškumą. Rezultatai įvedami į stulpelį, kurio pavadinimas `newColumnName`. Ši funkcija veikia panašiai kaip Table.Join su JoinKind arba LeftOuter, išskyrus tai, kad sujungimo rezultatai pateikiami įdėti, o ne plokščiuoju principu.


## Examples

### Example #1
Pridėkite sujungtą stulpelį prie (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) pavadinimu „price/stock“ iš lentelės (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}), sujungtos \[saleID\].
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
