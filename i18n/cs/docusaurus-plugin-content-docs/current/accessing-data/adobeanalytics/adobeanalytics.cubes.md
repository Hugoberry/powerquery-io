---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Vrátí sady sestav ve službě Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Vrátí tabulku multidimenzionálních balíčků ze služby Adobe Analytics. Zadáním volitelného parametru záznamu, `options`, je možné ovládat následující možnosti:

-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).
-   `MaxRetryCount` : Počet opakování při dotazování na výsledek dotazu. Výchozí hodnota je 120.
-   `RetryInterval` : Doba mezi pokusy o opakování. Výchozí hodnota je 1 sekunda.
-   `Implementation` : Určuje verzi rozhraní API Adobe Analytics. Platné hodnoty jsou: 2.0. Výchozí nastavení používá verzi rozhraní API 1.4.



## Category
Accessing data
