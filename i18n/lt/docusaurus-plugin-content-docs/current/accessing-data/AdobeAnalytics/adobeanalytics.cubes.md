---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Pateikia ataskaitą, tinkamą naudoti „Adobe Analytics“.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Pateikiama kelių dimensijų paketų iš „Adobe Analytics“ lentelė. Galima nurodyti pasirenkamą įrašo parametrą `options`, kad būtų galima valdyti šias parinktis:

-   `HierarchicalNavigation` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).
-   `MaxRetryCount` : Užklausos rezultatų prašymų kartojimų skaičius. Numatytoji reikšmė yra 120.
-   `RetryInterval` : Laikas tarp kartojimų. Numatytoji reikšmė yra 1 sekundė.
-   `Implementation` : Nurodo „Adobe Analytics“ API versiją. Tinkamos reikšmės yra: „2.0“. Numatytoji reikšmė naudoja API 1.4 versiją



## Category
Accessing data
