---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Pateikiamas „Hive“ LLAP lentelių sąrašas, nurodytas „Hive“ LLAP <code>serverio</code> <code>duomenų bazėje</code> (naudojant pasirinktą <code>protokolą</code>). Be serverio gali būti nurodytas prievado numeris, atskirtas dvitaškiu. „Thrift“ perdavimo protokolas yra sunumeruotojo tipo ir jo reikšmės yra Standartinis, HTTP. Galima nurodyti pasirenkamą parametrą <code>options</code>, kuriuo valdomos tolesnės parinktys.<ul>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti, kiek laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.</li>        <li><code>CommandTimeout</code>: trukmė, kontroliuojanti, kiek laiko leidžiama vykdyti užklausą serveryje, prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li></ul>Parametras <code>options</code> nurodomas kaip [option1 = value1, option2 = value2...].


