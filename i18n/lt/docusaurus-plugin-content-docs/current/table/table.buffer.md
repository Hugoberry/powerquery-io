---
title: Table.Buffer
---

# Table.Buffer


Lentelė kaupiama atmintyje ir vertinimo metu neleidžiama atlikti išorinių keitimų.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Lentelė buferizuojama atmintyje, todėl vertinimo metu ji izoliuojama nuo išorinių pakeitimų. Buferizacija yra negili. Ji priverčia įvertinti visas skaliarinių langelių reikšmes, tačiau neskaliarines reikšmes (įrašus, sąrašus, lenteles ir pan.) palieka tokias, kokios yra.

-   `table`: lentelė, kurią reikia buferizuoti atmintyje.
-   `options`: (Pasirinktinai) Galima naudoti šias įrašo reikšmes:
    -   `BufferMode`: buferio režimas, apibūdinantis atliekamos buferizacijos tipą. Ši parinktis gali būti `BufferMode.Eager` arba `BufferMode.Delayed`.

Naudojant šią funkciją užklausos gali veikti greičiau arba lėčiau. Kai kuriais atvejais užklausos gali veikti lėčiau dėl papildomų visų duomenų skaitymo ir saugojimo atmintyje išlaidų, taip pat dėl to, kad buferizacija neleidžia vykdyti tolesnio sulankstymo. Jei duomenų nereikia buferizuoti, bet norite tik išvengti tolesnio sulankstymo, vietoj to naudokite `Table.StopFolding`.


## Examples

### Example #1
Įkelkite visas SQL lentelės eilutes į atmintį, kad jokios iš įrenginio atliekamos operacijos nebegalėtų pateikti užklausų SQL serveriui.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
