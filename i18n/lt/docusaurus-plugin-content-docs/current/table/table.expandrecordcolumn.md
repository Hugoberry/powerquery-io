---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Įrašų stulpelis išplečiamas į stulpelius su kiekviena reikšme.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Pagal įrašų `column` įvestyje `table`, sukuriama lentelė su stulpeliu kiekvienam įrašo laukui. Jei reikia, galima nurodyti `newColumnNames`, norint užtikrinti, kad naujojoje lentelėje stulpelių pavadinimai būtų unikalūs.

-   `table`: pradinė lentelė su išplėstinu įrašų stulpeliu.
-   `column`: išplėstinas stulpelis.
-   `fieldNames`: į lentelės stulpelius išplėstinų laukų sąrašas.
-   `newColumnNames`: naujiems stulpeliams suteiktinų stulpelių pavadinimų sąrašas. Naujų stulpelių pavadinimai negali kartotis jokiuose naujos lentelės stulpeliuose.


## Examples

### Example #1
Išplėskite stulpelį \[a\] lentelėje `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` į 3 stulpelius – „aa“, „bb“ ir „cc“.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
