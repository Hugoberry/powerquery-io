---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Pateikia ataskaitą, tinkamą naudoti „Adobe Analytics“.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Pateikiama kelių dimensijų paketų iš „Adobe Analytics“ lentelė. Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>MaxRetryCount</code> : Užklausos rezultatų prašymų kartojimų skaičius. Numatytoji reikšmė yra 120.</li><li><code>RetryInterval</code> : Laikas tarp kartojimų. Numatytoji reikšmė yra 1 sekundė.</li><li><code>Implementation</code> : Nurodo „Adobe Analytics“ API versiją. Tinkamos reikšmės yra: „2.0“. Numatytoji reikšmė naudoja API 1.4 versiją</li></ul>    



## Category
Accessing data
