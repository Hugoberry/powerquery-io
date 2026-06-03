---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Returnerer rapportpakkerne i Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over multidimensionelle pakker fra Adobe Analytics. Der kan angives en valgfri postparameter, `options`, til at styre følgende indstillinger:

-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).
-   `MaxRetryCount` : Det antal forsøg, der skal udføres, når der forespørges efter resultatet af forespørgslen. Standardværdien er 120.
-   `RetryInterval` : Varigheden af tidsintervallet mellem nye forsøg. Standardværdien er 1 sekund.
-   `Implementation` : Angiver Adobe Analytics API-version. Gyldige værdier er: "2.0". Standard bruger API-version 1.4.



## Category
Accessing data
