---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

A jelentéscsomagokat az Adobe Analytics rendszerében adja vissza.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Többdimenziós csomagok tábláját adja vissza az Adobe Analytics rendszeréből. Megadható egy választható rekordparaméter (<code>options</code>) a következő beállítások meghatározásához:    <ul><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely megadja, hogy a t&#225;bl&#225;k a s&#233;manevek szerint csoportos&#237;tva jelenjenek-e meg (az alap&#233;rtelmezett &#233;rt&#233;k a false (hamis)).</li><li><code>MaxRetryCount</code> : A lek&#233;rdez&#233;s eredm&#233;ny&#233;nek ciklikus lek&#233;rdez&#233;se eset&#233;n v&#233;grehajtand&#243; &#250;jrapr&#243;b&#225;lkoz&#225;sok sz&#225;ma. Az alap&#233;rt&#233;k 120.</li><li><code>RetryInterval</code> : Az &#250;jrapr&#243;b&#225;lkoz&#225;si k&#237;s&#233;rletek k&#246;z&#246;tti időtartam. Az alap&#233;rtelmezett &#233;rt&#233;k 1 m&#225;sodperc.</li><li><code>Implementation</code> : Az Adobe Analytics API verzi&#243;j&#225;nak megad&#225;sa. Az &#233;rv&#233;nyes &#233;rt&#233;kek a k&#246;vetkezők: „2.0“. Az alap&#233;rtelmez&#233;s az API 1.4-es verzi&#243;j&#225;t haszn&#225;lja.</li></ul>    



## Category
Accessing data
