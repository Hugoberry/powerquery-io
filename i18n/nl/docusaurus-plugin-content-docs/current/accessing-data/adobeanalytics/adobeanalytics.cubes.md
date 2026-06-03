---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retourneerd de rapportsuites in Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met multidimensionale pakketten geretourneerd uit de Adobe Analytics. U kunt een optionele recordparameter `options` opgeven om de volgende opties te bepalen:

-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).
-   `MaxRetryCount` : Het aantal nieuwe pogingen om uit te voeren wanneer wordt nagevraagd naar de resultaten van de query. De standaardwaarde is 120.
-   `RetryInterval` : De tijdsduur tussen nieuwe pogingen. De standaardwaarde is 1 seconde.
-   `Implementation` : Hiermee geeft u de Adobe Analytics API-versie op. Geldige waarden zijn: 2.0. Standaard wordt API-versie 1.4 gebruikt.



## Category
Accessing data
