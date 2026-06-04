---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Vraća pakete izveštaja u usluzi Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Vraća tabelu višedimenzionalnih paketa iz usluge Adobe Analytics. Moguće je navesti opcionalni parametar zapisa, `options`, radi kontrole sledećih opcija:

-   `HierarchicalNavigation` : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).
-   `MaxRetryCount` : Broj ponovnih pokušaja prilikom prikupljanja rezultata upita. Podrazumevana vrednost je 120.
-   `RetryInterval` : Vreme koje protekne između ponovnih pokušaja. Podrazumevana vrednost je 1 sekunda.
-   `Implementation` : Navodi API verziju usluge Adobe Analytics. Važeće vrednosti su: „2.0“. Podrazumevano koristi API verziju 1.4.



## Category
Accessing data
