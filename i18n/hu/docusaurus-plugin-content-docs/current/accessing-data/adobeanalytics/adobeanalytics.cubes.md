---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


A jelentéscsomagokat az Adobe Analytics rendszerében adja vissza.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Többdimenziós csomagok tábláját adja vissza az Adobe Analytics rendszeréből. Megadható egy választható rekordparaméter (`options`) a következő beállítások meghatározásához:

-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely megadja, hogy a táblák a sémanevek szerint csoportosítva jelenjenek-e meg (az alapértelmezett érték a false (hamis)).
-   `MaxRetryCount` : A lekérdezés eredményének ciklikus lekérdezése esetén végrehajtandó újrapróbálkozások száma. Az alapérték 120.
-   `RetryInterval` : Az újrapróbálkozási kísérletek közötti időtartam. Az alapértelmezett érték 1 másodperc.
-   `Implementation` : Az Adobe Analytics API verziójának megadása. Az érvényes értékek a következők: „2.0“. Az alapértelmezés az API 1.4-es verzióját használja.



## Category
Accessing data
