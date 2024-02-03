---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Pateikiama naršymo lentelė su lentelėmis, surastomis nurodytame abonemente iš „Azure“ saugyklos.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Pateikiama naršymo lentelė, kurioje yra paskyros URL, <code>account</code>, surasta eilutė kiekvienai lentelei, iš „Azure“ saugyklos. Kiekvienoje eilutėje yra saitas į „Azure“ lentelę. Norint nurodyti papildomas ypatybes galima pateikti pasirenkamą įrašo parametrą, <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>Timeout</code> : Trukmė, kuria kontroliuojama, kiek laukti prieš nutraukiant užklausą su serveriu. Numatytoji reikšmė priklauso nuo šaltinio.</li></ul>



## Category
Accessing data
