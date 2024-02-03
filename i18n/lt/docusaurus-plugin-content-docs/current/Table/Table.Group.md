---
title: Table.Group
---

# Table.Group


## Description

Grupuojamos lentelės eilutės, turinčios tokį patį raktą.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Grupuoja <code>table</code> eilutes pagal <code>key</code> apibrėžtus pagrindinius stulpelius. <code>key</code> gali būti vieno stulpelio pavadinimas arba stulpelių pavadinimų sąrašas.    Kiekvienai grupei įrašas sudaromas iš pagrindinių stulpelių (ir jų reikšmių) bei agreguotų stulpelių, kuriuos nurodo <code>aggregatedColumns</code>.    Pasirinktinai galima nurodyti <code>groupKind</code> ir <code>comparer</code>.<br />    <br />   Jeigu duomenys jau surūšiuoti pagal pagrindinius stulpelius, tada gali būti pateikta <code>groupKind</code> iš GroupKind.Local. Tokiu būdu galima pagerinti grupavimo našumą tam tikrais atvejais,    nes laikoma, kad visos eilutės su nurodytu pagrindinių reikšmių rinkiniu yra gretimos.<br />    <br />    Atkreipkite dėmesį, kad jeigu perduodant <code>comparer</code> apdorojami skirtingi raktai kaip lygiaverčiai, eilutė gali būti perkelta į grupę, kurios raktai skiriasi nuo jos.<br />    <br />    Ši funkcija negarantuoja pateikiamų eilučių tvarkos.  


## Examples

### Example #1 
Grupuokite lentelę pridėdami agreguotą stulpelį [total], kuriame yra kainų suma (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
