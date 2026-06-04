---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Pirmosios reikšmių eilutės lygis pakeliamas iki naujų stulpelių antraščių (t. y. stulpelių pavadinimų).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Pirmosios reikšmių eilutės lygis pakeliamas iki naujų stulpelių antraščių (t. y. stulpelių pavadinimų). Pagal numatytuosius parametrus tik tekstinės arba skaičių reikšmės yra pakeliamos iki antraščių. Leistinos parinktys:

-   `PromoteAllScalars`: jei nustatyta kaip `true`, visos pirmos eilutės skaliarinės reikšmės bus pakeltos iki antraščių naudojant `Culture`, jei nurodyta (arba dabartinę dokumento lokalę). reikšmių, kurių negalima konvertuoti į tekstą atveju bus naudojamas numatytasis stulpelio pavadinimas.
-   `Culture`: kultūros pavadinimas, nurodantis duomenų kultūrą.


## Examples

### Example #1
Pakelkite į aukštesnį lygį pirmąją reikšmių eilutę lentelėje.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Visų pirmosios lentelės eilutės skaliarų lygis pakeliamas iki antraščių.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
