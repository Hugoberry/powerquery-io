---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Pateikiama naršymo lentelė su lentelėmis, surastomis nurodytame abonemente iš „Azure“ saugyklos.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Pateikiama naršymo lentelė, kurioje yra paskyros URL, `account`, surasta eilutė kiekvienai lentelei, iš „Azure“ saugyklos. Kiekvienoje eilutėje yra saitas į „Azure“ lentelę. Norint nurodyti papildomas ypatybes galima pateikti pasirenkamą įrašo parametrą, `options`. Įraše gali būti šie laukai:

-   `Timeout` : Trukmė, kuria kontroliuojama, kiek laukti prieš nutraukiant užklausą su serveriu. Numatytoji reikšmė priklauso nuo šaltinio.



## Category
Accessing data
