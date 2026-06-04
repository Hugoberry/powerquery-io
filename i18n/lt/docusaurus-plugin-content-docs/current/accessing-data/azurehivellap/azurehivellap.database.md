---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importuoti duomenis iš „HDInsight Interactive Query“


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiamas „HDInsight Interactive Query“ lentelių sąrašas, nurodytas „HDInsight Interactive Query“ `serverio` `duomenų bazėje`. Be serverio gali būti nurodytas prievado numeris, atskirtas dvitaškiu. Galima nurodyti pasirenkamą parametrą `options`, kuriuo valdomos tolesnės parinktys.

-   `ConnectionTimeout`: trukmė, kontroliuojanti, kiek laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `CommandTimeout`: trukmė, kontroliuojanti, kiek laiko leidžiama vykdyti užklausą serveryje, prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.

Parametras `options` nurodomas kaip \[option1 = value1, option2 = value2...\].


