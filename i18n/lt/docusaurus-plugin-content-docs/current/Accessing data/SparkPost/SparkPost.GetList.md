---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Šią funkciją galima naudoti norint iškviesti bet kurį iš „SparkPost“ API 1 versijos siūlomų galinių punktų Sąrašai. Iškviesdami „SparkPost“ API naudodami šią funkciją nepamirškite, kad „SparkPost“ API taikomas griežtas API spartos limitas. Jei „SparkPost“ serveris pateikia pranešimą apie 429 būsenos kodą, reikia paspausti spartos limitą, palaukti kelias sekundes ir tik tada kviesti vėl.


## Examples

### Example #1 
Pateikiama lentelė su vienu stulpeliu, užpildytu vieno iš „SparkPost“ API 1 versijos galinių punktų Sąrašai duomenimis (išsamią informaciją žr. „SparkPost“ dokumentacijoje).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



