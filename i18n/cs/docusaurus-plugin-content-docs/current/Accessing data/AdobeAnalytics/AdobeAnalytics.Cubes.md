---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Vrátí sady sestav ve službě Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Vrátí tabulku multidimenzionálních balíčků ze služby Adobe Analytics. Zadáním volitelného parametru záznamu, <code>options</code>, je možné ovládat následující možnosti:    <ul><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je false).</li><li><code>MaxRetryCount</code> : Počet opakov&#225;n&#237; při dotazov&#225;n&#237; na v&#253;sledek dotazu. V&#253;choz&#237; hodnota je 120.</li><li><code>RetryInterval</code> : Doba mezi pokusy o opakov&#225;n&#237;. V&#253;choz&#237; hodnota je 1 sekunda.</li><li><code>Implementation</code> : Určuje verzi rozhran&#237; API Adobe Analytics. Platn&#233; hodnoty jsou: 2.0. V&#253;choz&#237; nastaven&#237; použ&#237;v&#225; verzi rozhran&#237; API 1.4.</li></ul>    



## Category
Accessing data
