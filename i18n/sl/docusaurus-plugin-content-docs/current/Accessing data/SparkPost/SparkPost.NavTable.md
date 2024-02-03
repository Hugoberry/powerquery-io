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

Pridobite vgrajene tabele, ki jih razkrije priključek SparkPost z združenimi podatki za uporabniško določeno število dni. Pri osveževanju teh tabel ali klicanju vmesnika API za SparkPost API s tem priključkom upoštevajte, da je za vmesnik API za SparkPost določena stroga omejitev števila klicev vmesnika API. Če strežnik SparkPost vrne kodo stanja 429, ste dosegli omejitev števila klicev, zato boste pred dodatnimi klici morali počakati nekaj trenutkov. Pri izbiranju vrednosti za parameter števila dni upoštevajte, da lahko vmesnik API shrani podatke samo za 6 mesecev.


