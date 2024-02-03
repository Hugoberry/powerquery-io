---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Pateikiamos ataskaitos iš „Salesforce“ abonemento.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Ataskaitos pateikiamos kredencialuose nurodytoje „Salesforce“ paskyroje. Paskyra bus prijungiama per nurodytą aplinką <code>loginUrl</code>. Jei aplinka nenurodyta, paskyra bus prijungta prie gamybos (https://login.salesforce.com). Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, kad būtų galima nurodyti papildomas ypatybes. Įrašą gali sudaryti šie laukai:    <ul><li><code>ApiVersion</code> : „Salesforce“ API versija, naudotina šiai užklausai. Jei nenurodyta, naudojama 29.0 API versija.</li><li><code>Timeout</code> : Trukmė, kuria kontroliuojama, kiek laukti prieš nutraukiant užklausą su serveriu. Numatytoji reikšmė priklauso nuo šaltinio.</li></ul>    



## Category
Accessing data
