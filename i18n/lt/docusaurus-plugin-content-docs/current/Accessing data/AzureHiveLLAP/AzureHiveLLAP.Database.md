---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importuoti duomenis iš „HDInsight Interactive Query“


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiamas „HDInsight Interactive Query“ lentelių sąrašas, nurodytas „HDInsight Interactive Query“ <code>serverio</code> <code>duomenų bazėje</code>. Be serverio gali būti nurodytas prievado numeris, atskirtas dvitaškiu. Galima nurodyti pasirenkamą parametrą <code>options</code>, kuriuo valdomos tolesnės parinktys.<ul>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti, kiek laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.</li>        <li><code>CommandTimeout</code>: trukmė, kontroliuojanti, kiek laiko leidžiama vykdyti užklausą serveryje, prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li></ul>Parametras <code>options</code> nurodomas kaip [option1 = value1, option2 = value2...].


