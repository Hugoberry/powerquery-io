---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importuoti duomenis iš „Hive“ LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Pateikiamas „Hive“ LLAP lentelių sąrašas, nurodytas „Hive“ LLAP `serverio` `duomenų bazėje` (naudojant pasirinktą `protokolą`). Be serverio gali būti nurodytas prievado numeris, atskirtas dvitaškiu. „Thrift“ perdavimo protokolas yra sunumeruotojo tipo ir jo reikšmės yra Standartinis, HTTP. Galima nurodyti pasirenkamą parametrą `options`, kuriuo valdomos tolesnės parinktys.

-   `ConnectionTimeout`: trukmė, kontroliuojanti, kiek laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `CommandTimeout`: trukmė, kontroliuojanti, kiek laiko leidžiama vykdyti užklausą serveryje, prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.

Parametras `options` nurodomas kaip \[option1 = value1, option2 = value2...\].


