---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Pateikiama „SparkPost“ API 1 vers. esančių metrikų lentelė


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Šią funkciją galima naudoti norint gauti duomenis iš tam tikro „SparkPost“ API 1 versijos galinio punkto Metrika. Atnaujindami šias lenteles arba iškviesdami „SparkPost“ API naudodami šią jungtį nepamirškite, kad „SparkPost“ API taikomas griežtas API spartos limitas. Jei „SparkPost“ serveris pateikia pranešimą apie 429 būsenos kodą, reikia paspausti spartos limitą, palaukti kelias sekundes ir tik tada iškviesti vėl. Pasirinkdami parametro Dienų skaičius reikšmę atkreipkite dėmesį į tai, kad API saugo tik 6 mėnesių duomenis.


## Examples

### Example #1 
Gaunama visų per paskutines tris dienas agreguotų campaign_ids count_sent ir count_rejected pateikimo galimybių metrika.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
lentelė
```



