---
title: Salesforce.Data
---

# Salesforce.Data


Pateikiami objektai iš „Salesforce“ abonemento.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Objektai pateikiami kredencialuose nurodytoje „Salesforce“ paskyroje. Paskyra bus prijungiama per nurodytą aplinką `loginUrl`. Jei aplinka nenurodyta, paskyra bus prijungta prie gamybos (https://login.salesforce.com). Galima nurodyti pasirenkamą įrašo parametrą `options`, kad būtų galima nurodyti papildomas ypatybes. Įrašą gali sudaryti šie laukai:

-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `ApiVersion` : „Salesforce“ API versija, naudotina šiai užklausai. Jei nenurodyta, naudojama 29.0 API versija.
-   `Timeout` : Trukmė, kuria kontroliuojama, kiek laukti prieš nutraukiant užklausą su serveriu. Numatytoji reikšmė priklauso nuo šaltinio.



## Category
Accessing data
