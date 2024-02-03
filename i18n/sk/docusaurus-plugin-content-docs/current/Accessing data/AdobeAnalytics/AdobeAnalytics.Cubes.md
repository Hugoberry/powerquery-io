---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Vráti balíky zostáv v službe Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Vráti tabuľku viacrozmerných balíkov zo služby Adobe Analytics. Zadaním voliteľného parametra záznamu, <code>options</code>, sa dajú ovládať tieto možnosti:    <ul><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li><li><code>MaxRetryCount</code> : Počet opakovan&#237;, ktor&#233; sa maj&#250; vykonať pri zisťovan&#237; v&#253;sledku dotazu. Predvolen&#225; hodnota je 120.</li><li><code>RetryInterval</code> : Čas medzi opakovan&#237;m pokusov. Predvolen&#225; hodnota je 1 sekunda.</li><li><code>Implementation</code> : Určuje verziu rozhrania API Adobe Analytics. Platn&#233; hodnoty s&#250;: 2.0. Predvolen&#225; hodnota použ&#237;va rozhranie API verzie 1.4.</li></ul>    



## Category
Accessing data
