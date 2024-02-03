---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Pateikiami objektai iš „Salesforce“ abonemento.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Objektai pateikiami kredencialuose nurodytoje „Salesforce“ paskyroje. Paskyra bus prijungiama per nurodytą aplinką <code>loginUrl</code>. Jei aplinka nenurodyta, paskyra bus prijungta prie gamybos (https://login.salesforce.com). Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, kad būtų galima nurodyti papildomas ypatybes. Įrašą gali sudaryti šie laukai:    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>ApiVersion</code> : „Salesforce“ API versija, naudotina šiai užklausai. Jei nenurodyta, naudojama 29.0 API versija.</li><li><code>Timeout</code> : Trukmė, kuria kontroliuojama, kiek laukti prieš nutraukiant užklausą su serveriu. Numatytoji reikšmė priklauso nuo šaltinio.</li></ul>    



## Category
Accessing data
