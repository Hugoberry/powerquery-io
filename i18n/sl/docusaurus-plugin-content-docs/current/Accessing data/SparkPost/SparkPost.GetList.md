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

To funkcijo lahko uporabite za klicanje katere koli končne točke "Seznam", ki so na voljo v vmesniku API za SparkPost v1. Pri klicanju vmesnika API za SparkPost s to funkcijo upoštevajte, ne pozabite, da je za vmesnik API za SparkPost določena stroga omejitev števila klicev vmesnika API. Če strežnik SparkPost vrne kodo stanja 429, ste dosegli omejitev števila klicev, zato boste pred dodatnimi klici morali počakati nekaj trenutkov.


## Examples

### Example #1 
Vrne tabelo, v kateri je en stolpec dopolnjen s podatki iz ene končne točke &#34;Seznami&#34; vmesnika API za SparkPost v1 (podrobnosti najdete v dokumentaciji za SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



