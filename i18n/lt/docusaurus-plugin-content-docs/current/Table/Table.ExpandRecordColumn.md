---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

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


## Details

Pagal įrašų <code>column</code> įvestyje <code>table</code>, sukuriama lentelė su stulpeliu kiekvienam įrašo laukui. Jei reikia, galima nurodyti <code>newColumnNames</code>, norint užtikrinti, kad naujojoje lentelėje stulpelių pavadinimai būtų unikalūs.    <ul>        <li><code>table</code>: pradinė lentelė su išplėstinu įrašų stulpeliu. </li>        <li><code>column</code>: išplėstinas stulpelis.</li>        <li><code>fieldNames</code>: į lentelės stulpelius išplėstinų laukų sąrašas.</li>        <li><code>newColumnNames</code>: naujiems stulpeliams suteiktinų stulpelių pavadinimų sąrašas. Naujų stulpelių pavadinimai negali kartotis jokiuose naujos lentelės stulpeliuose.</li>    </ul>


## Examples

### Example #1 
Išplėskite stulpelį [a] lentelėje &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; į 3 stulpelius – „aa“, „bb“ ir „cc“.
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
