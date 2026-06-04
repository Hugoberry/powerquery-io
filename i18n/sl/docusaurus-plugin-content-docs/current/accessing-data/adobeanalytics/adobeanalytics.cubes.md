---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Vrne zbirke poročil iz storitve Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Vrne tabelo večdimenzionalnih paketov iz storitve Adobe Analytics. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").
-   `MaxRetryCount` : Število ponovnih poskusov, ki bodo izvedeni pri pozivanju za rezultat poizvedbe. Privzeta vrednost je 120.
-   `RetryInterval` : Čas med ponovnimi poskusi. Privzeta vrednost je 1 sekunda.
-   `Implementation` : Navaja različico API-ja storitve Adobe Analytics. Veljavne vrednosti so:"2.0". Privzeta nastavitev uporablja različico API-ja 1.4.



## Category
Accessing data
