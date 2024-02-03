---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Gaunamos įtaisytosios lentelės, rodomos naudojant „SparkPost“ jungtį, su agreguotais vartotojo nurodyto dienų skaičiaus duomenimis. Atnaujindami šias lenteles arba iškviesdami „SparkPost“ API naudodami šią jungtį nepamirškite, kad „SparkPost“ API taikomas griežtas API spartos limitas. Jei „SparkPost“ serveris pateikia pranešimą apie 429 būsenos kodą, reikia paspausti spartos limitą, palaukti kelias sekundes ir tik tada kviesti vėl. Pasirinkdami parametro Dienų skaičius reikšmę atkreipkite dėmesį į tai, kad API saugo tik 6 mėnesių duomenis.


