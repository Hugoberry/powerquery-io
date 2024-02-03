---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Nurodyti stulpeliai sujungiami į naują įrašo reikšmių stulpelį, kur kiekvieno įrašo lauko pavadinimai ir reikšmės atitinka sujungtų stulpelių pavadinimus ir reikšmes.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Nurodyti <code>table</code> stulpeliai sujungiami į naują įrašo reikšmių stulpelį pavadinimu <code>newColumnName</code>, kur kiekviename įraše yra laukų pavadinimai ir reikšmės, atitinkančios stulpelių pavadinimus ir sujungtų stulpelių reikšmes. Jei nurodytas <code>options</code> įrašas, gali būti pateiktos šios parinktys:    <ul>     <li> <code>DisplayNameColumn</code>: kai pateiktas kaip tekstas, nurodo, kad pateiktas stulpelio pavadinimas turi būti laikomas įrašo rodomu pavadinimu. Tai neturi turi būti vienas iš įrašo stulpelių.</li>     <li> <code>TypeName</code>: kai pateiktas kaip tekstas, nurodo gauto įrašo, kurį galima naudoti įkeliant duomenis įkėlimo aplinkos veikimo būdui skatinti, loginio tipo pavadinimas.</li>    </ul>    



## Category
Table.Transformation
