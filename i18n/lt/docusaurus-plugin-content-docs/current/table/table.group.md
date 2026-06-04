---
title: Table.Group
---

# Table.Group


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


## Remarks

Grupuoja `table` eilutes pagal `key` apibrėžtus pagrindinius stulpelius. `key` gali būti vieno stulpelio pavadinimas arba stulpelių pavadinimų sąrašas. Kiekvienai grupei įrašas sudaromas iš pagrindinių stulpelių (ir jų reikšmių) bei agreguotų stulpelių, kuriuos nurodo `aggregatedColumns`. Pasirinktinai galima nurodyti `groupKind` ir `comparer`.  
  
Jeigu duomenys jau surūšiuoti pagal pagrindinius stulpelius, tada gali būti pateikta `groupKind` iš GroupKind.Local. Tokiu būdu galima pagerinti grupavimo našumą tam tikrais atvejais, nes laikoma, kad visos eilutės su nurodytu pagrindinių reikšmių rinkiniu yra gretimos.  
  
Atkreipkite dėmesį, kad jeigu perduodant `comparer` apdorojami skirtingi raktai kaip lygiaverčiai, eilutė gali būti perkelta į grupę, kurios raktai skiriasi nuo jos.  
  
Ši funkcija negarantuoja pateikiamų eilučių tvarkos.


## Examples

### Example #1
Grupuokite lentelę pridėdami agreguotą stulpelį \[total\], kuriame yra kainų suma ("each List.Sum(\[price\])").
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
