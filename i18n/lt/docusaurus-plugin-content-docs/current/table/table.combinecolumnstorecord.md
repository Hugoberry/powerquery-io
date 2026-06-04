---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Nurodyti `table` stulpeliai sujungiami į naują įrašo reikšmių stulpelį pavadinimu `newColumnName`, kur kiekviename įraše yra laukų pavadinimai ir reikšmės, atitinkančios stulpelių pavadinimus ir sujungtų stulpelių reikšmes. Jei nurodytas `options` įrašas, gali būti pateiktos šios parinktys:

-   `DisplayNameColumn`: kai pateiktas kaip tekstas, nurodo, kad pateiktas stulpelio pavadinimas turi būti laikomas įrašo rodomu pavadinimu. Tai neturi turi būti vienas iš įrašo stulpelių.
-   `TypeName`: kai pateiktas kaip tekstas, nurodo gauto įrašo, kurį galima naudoti įkeliant duomenis įkėlimo aplinkos veikimo būdui skatinti, loginio tipo pavadinimas.



## Category
Table.Transformation
